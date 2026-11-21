import {DesktopLab} from './desktop-lab.mjs';
import {matchAnswer,command,gradeQuiz,Inactivity} from './core.mjs';
const html=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export class DavidClassroom extends HTMLElement {
  constructor(){
    super();this.attachShadow({mode:'open'});this.position=0;this.rate=1;this.active=false;this.micAllowed=false;this.historyAllowed=false;this.screenAllowed=false;this.epoch=0;this.records=[];this.conversations=[];
    this.idle=new Inactivity({prompt:()=>this.say('Are you still with me, sir? Take your time. Your answer will not be marked incorrect.'),pause:()=>{this.state='paused';this.status('Paused while waiting for you.');},shutdown:()=>this.shutdown()});
  }
  connectedCallback(){
    this.shadowRoot.innerHTML=`<link rel="stylesheet" href="${new URL('classroom.css',import.meta.url)}"><section aria-label="Professor David classroom"><header><img src="${new URL('portrait.jpg',import.meta.url)}" alt="Professor David"><div><strong>Professor David</strong><small id="status" role="status">Ready when you are</small></div><button data-action="minimize" aria-label="Minimize classroom">−</button><button data-action="expand" aria-label="Expand classroom">↗</button><button data-action="shutdown" aria-label="Stop classroom">×</button></header><div class="body"><p class="eyebrow">SCHOOLYARD · AUDIO CLASSROOM</p><h2 id="title">Learn at your pace.</h2><p id="transcript" aria-live="polite">Open a lesson and press Play. The device voice is a temporary preview; David’s final voice awaits approval.</p><div id="choices"></div><form id="answerForm"><label for="answer">Your answer or classroom command</label><input id="answer" autocomplete="off"><button>Send</button></form><div class="tools"><button data-action="repeat">Repeat</button><button data-action="recap">Recap</button><button data-action="explain">Explain</button><button data-action="slow">Slow down</button><button data-action="hint">Hint</button><button data-action="bookmark">Bookmark</button><button data-action="quiz">Weekly quiz</button><button data-action="lab">Desktop lab</button></div><details><summary>Privacy & learning records</summary><label><input type="checkbox" id="micPermission"> Enable speech input (may use your browser provider’s servers)</label><label><input type="checkbox" id="historyPermission"> Save classroom conversation history</label><label><input type="checkbox" id="screenPermission"> Allow requesting screen sharing</label><button data-action="screen">Share screen</button><button data-action="stopScreen">Stop sharing</button><video muted playsinline hidden></video><p>Screen preview stays on this device. Automated visual analysis is not connected. No screen control.</p><button data-action="history">Review history</button><button data-action="deleteHistory">Delete conversation history</button><pre id="history"></pre><label for="challenge">Challenge an explanation or grade</label><textarea id="challenge"></textarea><button data-action="challenge">Submit for review</button><div id="records"></div><div id="desktopLab" hidden><h3>Desktop lab guidance</h3><p id="labStep"></p><button data-action="labNext">I completed this step</button><label for="labEvidence">Sanitized lab evidence</label><textarea id="labEvidence"></textarea><button data-action="labSubmit">Submit evidence for verification</button></div></details><p class="notice">Keep this page open for voice study. “Hey David” works only during an active listening turn. After shutdown, tap the microphone. Locked-iPhone playback and always-on wake words are not supported.</p></div><footer><button data-action="mic" aria-label="Activate microphone">🎙 Microphone</button><button data-action="continue">▶ Play</button><button data-action="pause">Ⅱ Pause</button></footer></section>`;
    this.shadowRoot.addEventListener('click',e=>{const a=e.target.closest('[data-action]')?.dataset.action;if(a)this.handle(a).catch(err=>this.status(err.message));const answer=e.target.closest('[data-answer]');if(answer)this.respond(answer.dataset.answer,1);});
    this.shadowRoot.querySelector('#answerForm').onsubmit=e=>{e.preventDefault();const input=this.shadowRoot.querySelector('#answer');this.respond(input.value,1);input.value='';};
    for(const [id,key] of [['micPermission','micAllowed'],['historyPermission','historyAllowed'],['screenPermission','screenAllowed']])this.shadowRoot.getElementById(id).onchange=e=>{this[key]=e.target.checked;if(key==='micAllowed'&&!this[key])this.stopListening();if(key==='screenAllowed'&&!this[key])this.stopScreen();};
    this.visibility=()=>{if(document.hidden)this.shutdown();else this.idle.reconcile();};document.addEventListener('visibilitychange',this.visibility);
  }
  configure({lesson,week,store,completed=false}){this.shutdown();this.lesson=lesson;this.week=week;this.store=store;this.position=this.records.find(r=>r.id==='position-'+lesson.id)?.position||0;this.question=null;this.answers=[];this.shadowRoot.getElementById('choices').innerHTML='';this.quizIndex=null;this.completed=completed;this.shadowRoot.getElementById('title').textContent=lesson.title;this.status('Lesson ready. Press Play.');}
  status(text){this.shadowRoot.getElementById('status').textContent=text;}
  async save(id,value,kind='davidAcademic'){if(!this.store){this.status('Preview only — Firebase not connected; record was not saved.');return false;}try{await this.store.save(kind,id,value);return true;}catch(e){this.status('Not saved: '+e.message);return false;}}
  async log(role,text){if(this.historyAllowed&&this.store)await this.save(crypto.randomUUID(),{role,text,lessonId:this.lesson?.id,createdAt:Date.now()},'davidConversations');}
  updateRecords({reset,kind,records}){if(reset){this.shutdown(false);this.records=[];this.conversations=[];}else if(kind==='davidAcademic')this.records=records;else this.conversations=records;this.shadowRoot.getElementById('records').textContent=`${this.records.filter(r=>r.type==='lab-queue').length} desktop activities queued · ${this.records.filter(r=>r.type==='bookmark').length} bookmarks`;}
  stopListening(){if(this.recognition){this.recognition.onend=null;this.recognition.onresult=null;this.recognition.abort();this.recognition=null;}}
  cancelAudio(){this.epoch++;globalThis.speechSynthesis?.cancel();}
  say(text,after){
    this.cancelAudio();this.stopListening();this.shadowRoot.getElementById('transcript').textContent=text;this.log('david',text);
    if(!globalThis.speechSynthesis){this.status('Read the transcript; speech playback unavailable.');return;}
    const epoch=this.epoch,u=new SpeechSynthesisUtterance(text);u.rate=this.rate;u.onend=()=>{if(epoch===this.epoch)after?.();};u.onerror=()=>this.status('Audio interrupted. Press Play to retry.');speechSynthesis.speak(u);
  }
  wait(){this.processing=false;this.state='waiting';this.status('Your turn.');this.idle.wait();if(this.micAllowed)this.listen();}
  listen(){
    if(!this.micAllowed){this.status('Enable speech input in Privacy, or type your answer.');return;}
    const Recognition=globalThis.SpeechRecognition||globalThis.webkitSpeechRecognition;
    if(!Recognition){this.status('Speech input unavailable here. Use the answer buttons or text.');return;}
    this.cancelAudio();this.stopListening();const r=this.recognition=new Recognition();r.lang='en-US';r.continuous=false;r.interimResults=false;
    r.onresult=e=>{const a=e.results[e.resultIndex][0];this.respond(a.transcript,a.confidence);};
    r.onerror=e=>this.status('Microphone: '+e.error+'. Use text or tap to retry.');r.onend=()=>{if(this.recognition===r){this.recognition=null;this.status('Microphone off. Tap to speak again.');}};
    try{r.start();this.status('Listening…');}catch{this.status('Tap microphone to retry.');}
  }
  async handle(a){
    if(a==='shutdown'){this.shutdown();return;}if(a==='minimize'){this.setAttribute('minimized','');return;}if(a==='expand'){this.removeAttribute('minimized');return;}if(a==='stopScreen'){this.stopScreen();return;}
    if(a==='history'){this.shadowRoot.getElementById('history').textContent=this.conversations.map(x=>`${x.role}: ${x.text}`).join('\n');return;}
    if(a==='deleteHistory'){this.historyAllowed=false;this.shadowRoot.getElementById('historyPermission').checked=false;await this.store?.deleteHistory();this.shadowRoot.getElementById('history').textContent='';return;}
    if(a==='screen'){if(!this.screenAllowed)throw Error('Enable screen sharing in Privacy first.');if(!navigator.mediaDevices?.getDisplayMedia)throw Error('Screen sharing is unavailable in this browser.');this.stopScreen();this.stream=await navigator.mediaDevices.getDisplayMedia({video:true,audio:false});const v=this.shadowRoot.querySelector('video');v.hidden=false;v.srcObject=this.stream;await v.play();this.stream.getVideoTracks()[0].onended=()=>this.stopScreen();return;}
    if(!this.lesson)throw Error('Open a lesson first.');
    this.active=true;this.idle.clear();
    if(a==='mic'||a==='activate'){this.say('Yes, sir. I’m listening.',()=>this.wait());return;}
    if(a==='pause'){this.cancelAudio();this.stopListening();this.state='paused';this.idle.wait();return;}
    if(a==='slow'){this.rate=Math.max(.6,this.rate-.1);this.idle.wait();this.status(`Speaking speed ${this.rate.toFixed(1)}.`);return;}
    if(a==='bookmark'){await this.save('bookmark-'+this.lesson.id,{type:'bookmark',lessonId:this.lesson.id,position:this.position});this.idle.wait();return;}
    if(a==='challenge'){const text=this.shadowRoot.getElementById('challenge').value.trim();if(text)await this.save('review-'+crypto.randomUUID(),{type:'correction-review',lessonId:this.lesson.id,text,status:'pending',createdAt:Date.now()});this.idle.wait();return;}
    if(a==='labNext'){if(this.lab){const step=await this.lab.confirm();this.shadowRoot.getElementById('labStep').textContent=step||'Submit evidence for review. No completion credit awarded yet.';}this.idle.wait();return;}
    if(a==='labSubmit'){if(this.lab){await this.lab.submitEvidence(this.shadowRoot.getElementById('labEvidence').value);this.status('Evidence submitted for review; no automatic completion credit.');}this.idle.wait();return;}
    if(a==='lab'){
      await this.save('lab-'+this.lesson.id,{type:'lab-queue',lessonId:this.lesson.id,status:'pending',expected:this.lesson.expected,steps:this.lesson.demo});
      if(!matchMedia('(max-width: 790px)').matches){this.lab=new DesktopLab({lesson:this.lesson,save:(id,r)=>this.save(id,r)});this.shadowRoot.getElementById('desktopLab').hidden=false;this.shadowRoot.getElementById('labStep').textContent=this.lab.current();this.say('Follow the displayed steps. Confirm each one when finished. Submit sanitized evidence for review.',()=>this.wait());return;}
      this.say('This practical activity belongs in your desktop lab queue. Open SchoolYard on your computer and record evidence. Completion requires verification.',()=>this.wait());return;
    }
    if(a==='hint'){this.say('Identify the asset, the risk, and the protection each choice describes. Compare those to what the question asks.',()=>this.wait());return;}
    if(a==='quiz'){
      if(!this.canQuiz?.()){this.say('Complete the required lessons before starting this weekly assessment.',()=>this.wait());return;}
      this.quizIndex=0;this.answers=[];this.ask(this.week.quiz[0]);return;
    }
    if(a==='recap'){this.say(`${this.lesson.term}: ${this.lesson.definition}. ${this.lesson.why}`,()=>this.wait());return;}
    if(a==='explain'){this.say(`${this.lesson.analogy}. ${this.lesson.scenario}. ${this.lesson.why}`,()=>this.wait());return;}
    if(this.question){this.ask(this.question);return;}
    const chunks=[`${this.lesson.title}. ${this.lesson.definition}`,this.lesson.analogy,this.lesson.why,this.lesson.scenario];
    if(a==='repeat')this.position=Math.max(0,this.position-1);
    const next=()=>{if(!this.active)return;if(this.position<chunks.length){this.say(chunks[this.position++],next);}else{this.checkIndex=0;this.ask(this.lesson.knowledgeChecks[0]);}};next();
  }
  ask(q){this.processing=false;this.question=q;this.shadowRoot.getElementById('choices').innerHTML=q.choices.map((x,i)=>`<button data-answer="${String.fromCharCode(65+i)}">${String.fromCharCode(65+i)}. ${html(x)}</button>`).join('');this.say(`${q.question} ${q.choices.map((x,i)=>String.fromCharCode(65+i)+'. '+x).join('. ')}`,()=>this.wait());}
  async respond(text,confidence){
    const c=command(text);if(c){await this.handle(c);return;}
    if(!this.active){this.status('Press Play or Microphone to activate David.');return;}
    if(this.processing)return;
    this.idle.clear();this.stopListening();
    if(!this.question){this.say('Let’s stay with this cybersecurity lesson. You can ask me to explain, recap, or continue.',()=>this.wait());return;}
    const result=matchAnswer(text,this.question.choices,confidence);
    if(result.status==='clarify'){this.say('I’m not certain which option you mean. Please say the letter or the complete choice. No grade has been recorded.',()=>this.wait());return;}
    this.processing=true;this.log('student',text);const q=this.question,correct=result.index===q.correct;
    if(this.quizIndex!==null && this.quizIndex!==undefined){
      this.answers.push(result.index);this.quizIndex++;
      if(this.quizIndex<5){this.ask(this.week.quiz[this.quizIndex]);return;}
      const grade=gradeQuiz(this.week.quiz,this.answers);await this.save('quiz-'+crypto.randomUUID(),{type:'weekly-quiz',week:this.week.week,...grade,createdAt:Date.now()});
      if(this.onQuiz){try{await this.onQuiz(grade);}catch(e){this.status('Academy grade not saved: '+e.message);}}this.quizIndex=null;this.question=null;this.shadowRoot.getElementById('choices').innerHTML='';this.say(`${grade.correct} out of five. ${grade.passed?'Passed.':'Review the lesson and try again.'}`,()=>this.wait());return;
    }
    await this.save('check-'+crypto.randomUUID(),{type:'knowledge-check',lessonId:this.lesson.id,index:this.checkIndex,correct,answer:result.index,createdAt:Date.now()});
    if(correct)this.onCheck?.(this.checkIndex);
    this.say(`${correct?'Correct.':'Let’s review.'} ${q.explanation}`,()=>{
      if(!correct){this.ask(q);return;}
      this.checkIndex++;if(this.checkIndex<this.lesson.knowledgeChecks.length)this.ask(this.lesson.knowledgeChecks[this.checkIndex]);else {this.question=null;this.shadowRoot.getElementById('choices').innerHTML='';this.say('Knowledge checks complete. Continue practical work on desktop; use the existing lesson completion control when its requirements are met.',()=>this.wait());}
    });
  }
  stopScreen(){this.stream?.getTracks().forEach(t=>t.stop());this.stream=null;const v=this.shadowRoot?.querySelector('video');if(v){v.srcObject=null;v.hidden=true;}}
  shutdown(persist=true){this.processing=false;this.active=false;this.idle.clear();this.cancelAudio();this.stopListening();this.stopScreen();if(persist&&this.lesson)this.save('position-'+this.lesson.id,{type:'position',lessonId:this.lesson.id,position:this.position});if(this.shadowRoot.getElementById('status'))this.status('Inactive — microphone and audio off.');}
  disconnectedCallback(){this.shutdown();document.removeEventListener('visibilitychange',this.visibility);}
}
customElements.define('schoolyard-david',DavidClassroom);
