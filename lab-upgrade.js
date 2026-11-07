/* CYBER-COURSE guided browser laboratory, v2.2.
 * This is an intentionally constrained instructional terminal, NOT a shell, VM,
 * code execution service, internet connection, or general-purpose AI chatbot.
 * All generated company files are fictional. No eval, process execution, fetch,
 * third-party tokens, external APIs, or privileged browser capabilities.
 */
(()=>{'use strict';
const $=s=>document.querySelector(s);
const html=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let ctx=null,history=[],stage=0,terminalHistoryIndex=0;
const commandSteps=[
 {command:'pwd',meaning:'Find your current working folder.',result:'/home/student/agl-lab'},
 {command:'ls',meaning:'See which practice files are available.',result:null},
 {command:'cat briefing.txt',meaning:'Read the lesson-specific company briefing.',result:null},
 {command:'cat controls.txt',meaning:'Examine the suggested defensive control.',result:null},
 {command:'grep Risk controls.txt',meaning:'Find the risk label in the control document.',result:null}
];
function getSteps(){return ctx?commandSteps:[]}
function fileContents(name){if(!ctx)return '';
 const l=ctx.l,w=ctx.w;
 const f={
 'briefing.txt':`APEX GLOBAL LOGISTICS — FICTIONAL TRAINING FILE\nCourse ${w.month} | Week ${w.week} | Lesson ${ctx.d+1}\nTopic: ${l.term}\nWhy it matters: ${l.why}\nScenario: ${l.scenario}\nNever enter actual employer or personal information into training data.`,
 'controls.txt':`AGL SECURITY PRACTICE NOTE\nTopic: ${l.term}\nRisk: A control gap affecting this fictional training scenario.\nControl: ${l.definition}\nVerification: ${l.expected}\nProject action: ${l.projectStep}`,
 'README.txt':`You are in a SIMULATED terminal, not a virtual machine.\nSupported commands: help, pwd, whoami, ls, cat <known file>, grep <text> <known file>, clear.\nComplete each guided command to record the lab. Real VM labs begin in Course 3.`
 };return f[name];}
function resultFor(raw){const input=raw.trim().replace(/\s+/g,' ');let out='';
 if(input==='help')out='Commands: help, pwd, whoami, ls, cat briefing.txt, cat controls.txt, cat README.txt, grep Risk controls.txt, clear.';
 else if(input==='pwd')out='/home/student/agl-lab';
 else if(input==='whoami')out='student (fictional training account)';
 else if(input==='ls')out='README.txt\nbriefing.txt\ncontrols.txt';
 else if(input==='clear')return{clear:true};
 else if(input.startsWith('cat ')){let file=input.slice(4);out=fileContents(file)??`cat: ${file}: file not found in simulated workspace`;}
 else if(input.startsWith('grep ')){let m=input.match(/^grep (\S+) (\S+)$/);if(!m)out='Usage: grep <one-word-pattern> <known-file>';else{let content=fileContents(m[2]);if(content===undefined)out='File not found in simulated workspace';else out=content.split('\n').filter(line=>line.toLowerCase().includes(m[1].toLowerCase())).join('\n')||'No matching lines';}}
 else out=`This is a guided practice terminal, not a full shell. '${input.slice(0,70)}' is not supported. Type help for supported commands.`;
 return{out};}
function print(line,type='output'){const node=$('#cyberTerminalOutput');if(!node)return;const div=document.createElement('div');div.className='cyber-terminal-line '+type;div.textContent=line;node.append(div);node.scrollTop=node.scrollHeight;}
function updateUI(){if(!ctx)return;const steps=getSteps(),done=stage>=steps.length;
 const current=$('#cyberCurrentStep'),bar=$('#cyberLabProgress'),finish=$('#cyberLabFinish');
 if(current)current.textContent=done?'All five steps completed. Save your lab result.':`Step ${stage+1} of ${steps.length} — ${steps[stage].meaning}`;
 if(bar)bar.style.width=(Math.min(stage,steps.length)/steps.length*100)+'%';
 if(finish){finish.disabled=!done;finish.textContent=ctx.progress[ctx.key]?.complete?'✓ Lab saved — redo to practice':'✓ Save completed lab';}
 const note=$('#cyberLabStatus');if(note)note.textContent=ctx.progress[ctx.key]?.complete?'Previously completed — this attempt is practice.':'Your browser practice progress is stored in your academy backup.';
}
function runCommand(raw){if(!ctx)return;const trimmed=raw.trim();if(!trimmed)return;
 history.push(trimmed);history=history.slice(-50);terminalHistoryIndex=history.length;
 print('student@agl-lab:~$ '+trimmed,'command');const r=resultFor(trimmed);
 if(r.clear){$('#cyberTerminalOutput').replaceChildren();print('Simulated terminal cleared. Your guided steps remain unchanged.');return}
 print(r.out);if(stage<getSteps().length&&trimmed.replace(/\s+/g,' ')===getSteps()[stage].command){stage++;print('✓ Correct command. '+(stage===getSteps().length?'You finished the sequence.':'Continue with the next instruction.'),'success');updateUI();}
 else if(stage<getSteps().length)print('Tip: follow the current guided step above. You can explore other supported commands without penalty.','hint');}
function speaks(text){if(!('speechSynthesis' in window)){const status=$('#cyberBriefStatus');if(status)status.textContent='Speech playback is not supported in this browser. Read the transcript below.';return}
 speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.94;u.onend=()=>{const n=$('#cyberBriefStatus');if(n)n.textContent='Narration finished.'};speechSynthesis.speak(u);const n=$('#cyberBriefStatus');if(n)n.textContent='Narration playing · you can pause or stop in the header.';}
function briefing(kind){if(!ctx)return '';
 const l=ctx.l;
 return kind==='intro'?`Welcome to ${l.term}. Here is the big picture. ${l.definition}. Why this matters: ${l.why}. In our fictional logistics company, ${l.scenario}. Read the explanation below, then practice in the terminal.`:
 `Here is your next assignment for ${l.term}. Open the Practice Terminal below. Start with pwd to check your location, then ls to list the fictional files. Read briefing.txt and controls.txt using cat. Finally use grep to find the Risk line. Follow the instructions one at a time. This is a simulation, so it will not change your device. Save your lab result when complete.`;
}
function localAnswer(question){if(!ctx)return 'Open a lesson first.';const q=question.toLowerCase(),l=ctx.l;
 if(/(what|define|meaning|term|explain|confus|understand)/.test(q))return `${l.term}: ${l.definition} Everyday example: ${l.analogy}`;
 if(/(why|important|purpose|matter)/.test(q))return l.why;
 if(/(command|terminal|type|syntax|next|step|lab|practice)/.test(q))return `The Practice Terminal is a simulation. ${stage<getSteps().length?`Your current step is: ${getSteps()[stage].command}. ${getSteps()[stage].meaning}`:'You finished the command sequence. Select Save completed lab.'} You can type help to view supported commands.`;
 if(/(project|assignment|deliver|evidence|build)/.test(q))return `Project task: ${l.projectStep}. Weekly evidence: ${ctx.w.deliver}. Keep it synthetic and record what you actually tested.`;
 if(/(risk|security|protect|control|safe)/.test(q))return `Fictional case: ${l.scenario} Suggested protection: ${l.definition} Verify using this expected result: ${l.expected}`;
 if(/(error|problem|stuck|fail|help)/.test(q))return `Troubleshooting suggestion: ${l.troubleshooting} For the simulator, type help to view recognized commands.`;
 return `I can explain this lesson's definition, the lab commands, its project assignment, or troubleshooting. This is a local lesson helper—not a live AI model. To ask an open-ended question, use Open ChatGPT.`;
}
function chatAdd(who,text){const box=$('#cyberChatThread');if(!box)return;const p=document.createElement('p');p.className=who==='you'?'chat-student':'chat-professor';p.textContent=(who==='you'?'You: ':'Professor Go (lesson guide): ')+text;box.append(p);box.scrollTop=box.scrollHeight;}
function render(){if(!ctx)return;const already=!!ctx.progress[ctx.key]?.complete;const container=$('#guidedLabMount');if(!container)return;
 container.innerHTML=`<section class="cyber-upgrade-section" aria-label="Guided cyber practice"><div class="cyber-block-head"><span class="eyebrow">PRACTICAL LEARNING · PHONE + COMPUTER</span><h3>Learn → Practice → Check</h3><p>Guided browser exercises work on your phone. These commands simulate a training computer; they cannot access or change files on your device.</p></div>
 <div class="cyber-briefings"><section class="cyber-brief"><div><b>▶ Professor Go: Lesson introduction</b><small>A short spoken overview before reading</small></div><button type="button" class="btn small secondary" data-brief="intro">Play overview</button><details><summary>Read transcript</summary><p>${html(briefing('intro'))}</p></details></section><section class="cyber-brief"><div><b>▶ Professor Go: Assignment introduction</b><small>Explains the next task before the terminal</small></div><button type="button" class="btn small secondary" data-brief="assignment">Play assignment guide</button><details><summary>Read transcript</summary><p>${html(briefing('assignment'))}</p></details></section></div><p id="cyberBriefStatus" class="mini-note" role="status"></p>
 <div class="cyber-terminal-card"><div class="cyber-terminal-title"><span>⌘ PRACTICE TERMINAL</span><span>SIMULATED · SAFE · NO INSTALL</span></div><p id="cyberCurrentStep" class="cyber-step-prompt"></p><div class="cyber-progress-track"><div id="cyberLabProgress"></div></div><div id="cyberTerminalOutput" class="cyber-terminal-output" aria-live="polite" aria-label="Simulated terminal output"></div><form id="cyberTerminalForm" class="cyber-terminal-form"><label for="cyberTerminalInput">student@agl-lab:~$</label><input id="cyberTerminalInput" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Enter the next command" required><button class="btn small" type="submit">Run ↵</button></form><div class="cyber-terminal-actions"><button type="button" class="btn small ghost" id="cyberHint">Show next command</button><button type="button" class="btn small ghost" id="cyberReset">Restart practice</button><button type="button" class="btn small" id="cyberLabFinish" disabled>✓ Save completed lab</button></div><p class="mini-note" id="cyberLabStatus">${already?'Previously completed.':'Progress saves with your academy backup.'}</p></div>
 <details class="cyber-vm-detail"><summary>${ctx.w.month<3?'🔒 Advanced VM Lab — unlocks in Course 3':'🖥 Advanced VM Lab — optional computer extension'}</summary>${ctx.w.month<3?'<p>Learn the simulated terminal first. Real VM practice becomes available in Course 3.</p>':`<p>Requires a laptop/desktop and a properly isolated VM or authorized remote lab. Use an Ubuntu practice VM, create fictional files, then repeat <code>pwd</code>, <code>ls</code>, <code>cat briefing.txt</code>, and a harmless <code>grep</code>. A real VM is separate from this browser simulator; no VM is provisioned by this site.</p><p>Do not scan third-party hosts or put vulnerable practice systems on a public network.</p>`}</details>
 </section>`;
 print('CYBER-COURSE SIMULATED TERMINAL');print('Apex Global Logistics — synthetic data only. Type help for supported commands.');updateUI();
}
function renderChat(){if(!ctx)return;const wrap=$('#cyberHelpMount');if(!wrap)return;wrap.innerHTML=`<section class="cyber-chat-panel" aria-label="Professor Go help"><div class="cyber-chat-head"><div><b>👨🏿‍🏫 Ask Professor Go</b><small>Lesson-aware practice helper · on this page</small></div><button class="btn small ghost" type="button" id="cyberChatToggle" aria-expanded="false">Open help</button></div><div id="cyberChatBody" hidden><div id="cyberChatThread" class="cyber-chat-thread" aria-live="polite"><p class="chat-professor">Professor Go (lesson guide): Ask about the current lesson, the terminal task, or the project assignment. This local guide is not a generative AI model.</p></div><form id="cyberChatForm" class="cyber-chat-form"><label for="cyberChatInput" class="visually-hidden">Ask a lesson question</label><input id="cyberChatInput" placeholder="Ask about this lesson…" required maxlength="400"><button type="submit" class="btn small">Ask</button><button type="button" class="btn small secondary" id="cyberMic" title="Use voice input where supported" aria-label="Speak a question">🎤</button></form><p class="mini-note">Voice input requires supported browser permission. Questions are answered with lesson content only, not by a live AI service.</p><a class="btn small ghost cyber-external" href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">Open ChatGPT for open-ended questions ↗</a></div></section>`;
}
const cyber={mount(wno,d,l,w,progress,save){ctx={wno,d,l,w,progress,save,key:`${wno}-${d}`};history=[];terminalHistoryIndex=0;stage=0;render();renderChat();},stop(){ctx=null;}};
window.CyberLabs=cyber;
document.addEventListener('submit',e=>{
 if(e.target.id==='cyberTerminalForm'){e.preventDefault();const i=$('#cyberTerminalInput');runCommand(i.value);i.value='';i.focus()}
 if(e.target.id==='cyberChatForm'){e.preventDefault();const i=$('#cyberChatInput'),q=i.value.trim();if(!q)return;chatAdd('you',q);chatAdd('professor',localAnswer(q));i.value='';}
});
document.addEventListener('click',e=>{
 if(e.target.closest('[data-brief]')){speaks(briefing(e.target.closest('[data-brief]').dataset.brief));return}
 if(e.target.id==='cyberHint'){if(stage<getSteps().length)print('Try this command next: '+getSteps()[stage].command,'hint');return}
 if(e.target.id==='cyberReset'){stage=0;history=[];$('#cyberTerminalOutput')?.replaceChildren();print('New guided practice started.');updateUI();return}
 if(e.target.id==='cyberLabFinish'&&ctx&&stage===getSteps().length){ctx.progress[ctx.key]={complete:true,steps:stage,completedAt:new Date().toISOString(),mode:'simulated-browser'};ctx.save();print('✓ Lab completion saved in your academy progress.','success');updateUI();return}
 if(e.target.id==='cyberChatToggle'){let b=$('#cyberChatBody'),open=b.hidden;b.hidden=!open;e.target.textContent=open?'Close help':'Open help';e.target.setAttribute('aria-expanded',String(open));if(open)$('#cyberChatInput').focus();return}
 if(e.target.id==='cyberMic'){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){chatAdd('professor','Voice transcription is not available in this browser. Please type your question.');return}
  try{const rec=new SR();rec.lang='en-US';rec.interimResults=false;rec.onresult=ev=>{$('#cyberChatInput').value=ev.results[0][0].transcript;$('#cyberChatInput').focus();};rec.onerror=()=>chatAdd('professor','Microphone recognition failed or permission was denied. You can type instead.');rec.start();}catch{chatAdd('professor','Could not start microphone input. Please type instead.')}return;
 }
});
document.addEventListener('keydown',e=>{if(e.target.id!=='cyberTerminalInput'||!history.length)return;if(e.key==='ArrowUp'){e.preventDefault();terminalHistoryIndex=Math.max(0,terminalHistoryIndex-1);e.target.value=history[terminalHistoryIndex]}else if(e.key==='ArrowDown'){e.preventDefault();terminalHistoryIndex=Math.min(history.length,terminalHistoryIndex+1);e.target.value=history[terminalHistoryIndex]||''}});
})();
