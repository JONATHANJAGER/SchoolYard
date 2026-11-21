/** Opt-in adapter; uses public DOM controls to preserve existing grading/lock rules. */
import '../professor-david/classroom.mjs';
import '../certification-dashboard/dashboard.mjs';
import {connectStore} from '../professor-david/firebase-store.mjs';
export function mountSchoolYard({curriculum=window.CYBER_COURSE,store=null}={}) {
  if(!curriculum?.weeks)throw Error('Existing SchoolYard curriculum not loaded');
  const david=document.createElement('schoolyard-david');document.body.append(david);david.hidden=true;
  const launch=document.createElement('button');launch.textContent='Professor David';launch.type='button';launch.style.cssText='position:fixed;bottom:20px;right:20px;z-index:9999;padding:14px;border-radius:18px;background:#253957;color:white;border:1px solid #7edccf';document.body.append(launch);
  let current='';
  function configure(){
    const m=location.hash.match(/^#\/week\/(\d+)\/session\/([0-3])$/);if(!m)return false;
    const week=curriculum.weeks.find(w=>w.week===Number(m[1])),day=Number(m[2]);if(!week?.lessons[day])return false;
    if(current!==m[0]){current=m[0];david.configure({lesson:week.lessons[day],week,store});}
    david.canQuiz=()=>{
      const s=window.CYBER_COURSE_PROGRESS_BRIDGE?.get();
      return !!s && [0,1,2].every(d=>s.completed?.includes(`${week.week}-${d}`));
    };
    david.onCheck=i=>window.CYBER_COURSE_PROGRESS_BRIDGE?.recordCheck(week.week,day,i);
    david.onQuiz=g=>window.CYBER_COURSE_PROGRESS_BRIDGE?.recordQuiz(week.week,g.answers);
    return true;
  }
  launch.onclick=()=>{david.hidden=false;if(!configure())david.status('Open an existing lesson to begin.');};
  const changed=()=>{configure();};window.addEventListener('hashchange',changed);
  const dashboard=document.createElement('schoolyard-certifications');
  const boardButton=document.createElement('button');boardButton.textContent='Certification readiness';boardButton.type='button';boardButton.onclick=()=>{dashboard.hidden=!dashboard.hidden;};
  const target=document.querySelector('.top-actions');if(target)target.prepend(boardButton);dashboard.hidden=true;document.body.append(dashboard);
  const onChange=change=>{david.updateRecords(change);if(change.kind==='davidAcademic'){dashboard.records=change.records;dashboard.render();}};
  return {david,dashboard,async connect(){store=await connectStore(onChange,s=>david.status(s));david.store=store;},destroy(){david.remove();launch.remove();boardButton.remove();dashboard.remove();window.removeEventListener('hashchange',changed);store?.destroy();}};
}
