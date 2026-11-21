/** Pure classroom logic; no storage, browser or Firebase dependencies. */
export const normalize = text => String(text).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
export function matchAnswer(text, choices, confidence = 1) {
  const input = normalize(text);
  if (!input || (confidence > 0 && confidence < .7)) return {status:'clarify'};
  const letter = input.match(/^(?:(?:answer|option|choice|i choose|the answer is) )?([a-z])$/);
  if (letter) { const index=letter[1].charCodeAt(0)-97; return index<choices.length?{status:'matched',index}:{status:'clarify'}; }
  const exact=choices.map(normalize).map((s,i)=>s===input?i:-1).filter(i=>i>=0);
  if(exact.length===1)return {status:'matched',index:exact[0]};
  // Require a unique contiguous phrase. Never use answer correctness to resolve ambiguity.
  if (/\b(not|or|maybe|either)\b/.test(input)) return {status:'clarify'};
  const candidates=choices.map(normalize).map((s,i)=>input.length>=4 && (` ${s} `.includes(` ${input} `)||` ${input} `.includes(` ${s} `))?i:-1).filter(i=>i>=0);
  return candidates.length===1?{status:'matched',index:candidates[0]}:{status:'clarify'};
}
export function command(text) {
  const t=normalize(text);
  if(t==='hey david')return 'activate';
  return ({pause:'pause',continue:'continue',repeat:'repeat',recap:'recap','slow down':'slow','explain that':'explain',minimize:'minimize'})[t.replace(/^david /,'')]||null;
}
export function gradeQuiz(questions, answers) {
  if(questions.length!==5 || answers.length!==5 || answers.some((x,i)=>!Number.isInteger(x)||x<0||x>=questions[i].choices.length))throw Error('Five resolved answers required');
  const correct=answers.filter((a,i)=>a===questions[i].correct).length;
  return {correct,percentage:correct*20,passed:correct>=4,answers:[...answers]};
}
export function activityMode(kind) {
  return ['concept','terminology','revision','quiz','verbal-assessment'].includes(kind)?'audio':'desktop';
}
export function readiness(objectives, evidence, now=Date.now()) {
  if(!objectives?.length)return {percentage:null,coverage:0,reason:'Exam objectives not verified'};
  const byObjective=objectives.map(o=>{
    const rows=evidence.filter(e=>e.objective===o.id && e.examVersion===o.examVersion && e.reviewed===true && now-e.at<=90*86400000 && e.at<=now);
    // Deduplicate repeated questions; repeats do not inflate evidence volume.
    const unique=[...new Map(rows.sort((a,b)=>a.at-b.at).map(e=>[e.questionId,e])).values()];
    return {...o,count:unique.length,score:unique.length?unique.filter(e=>e.correct===true).length/unique.length:0};
  });
  const covered=byObjective.filter(o=>o.count>=5),coverage=covered.length/objectives.length;
  if(coverage<1)return {percentage:null,coverage:Math.round(coverage*100),areas:byObjective,reason:'At least five distinct reviewed questions per objective required'};
  const total=byObjective.reduce((n,o)=>n+(o.weight||1),0);
  return {percentage:Math.round(byObjective.reduce((n,o)=>n+o.score*(o.weight||1),0)/total*100),coverage:100,areas:byObjective,reason:'Evidence-based study indicator, not a pass probability'};
}
export class Inactivity {
  constructor({prompt,pause,shutdown,clock=()=>Date.now(),schedule=setTimeout,cancel=clearTimeout}){Object.assign(this,{prompt,pause,shutdown,clock,schedule,cancel});this.timers=[];}
  clear(){this.timers.forEach(this.cancel);this.timers=[];}
  wait(){this.clear();this.deadline=this.clock()+120000;this.timers=[this.schedule(()=>{this.prompt();this.pause();},30000),this.schedule(()=>{this.clear();this.shutdown();},120000)];}
  reconcile(){if(this.deadline && this.clock()>=this.deadline){this.clear();this.shutdown();}}
}
