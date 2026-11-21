"""Print an opt-in patch against the inspected app; never change files."""
from pathlib import Path
import difflib
p=Path('app.js')
source=p.read_text()
needle="function save(){state.updatedAt=new Date().toISOString();try{localStorage.setItem(STORAGE,JSON.stringify(state))}catch(e){toast('Browser storage unavailable: export your progress to back it up.')}}"
assert needle in source, 'Source changed; inspect before adapting'
replacement=needle.replace('JSON.stringify(state))}', "JSON.stringify(state));window.dispatchEvent(new CustomEvent('cybercourse:progress-saved'))}")
bridge='''
// Optional David adapter: preserve legacy state structure and grading rules.
window.CYBER_COURSE_PROGRESS_BRIDGE = {
  get: () => structuredClone(state),
  recordCheck(w,d,i) {
    const q=course.weeks[w-1]?.lessons[d]?.knowledgeChecks[i];
    if(!q || !isUnlocked(w,d))throw Error('Lesson is locked or missing');
    const key=`${w}-${d}`;state.miniPassed[key]??={};state.miniPassed[key][i]=true;save();
  },
  recordQuiz(w,answers) {
    const unit=course.weeks[w-1];
    if(!unit || ![0,1,2].every(d=>done(w,d)))throw Error('Assessment prerequisites incomplete');
    if(answers.length!==5 || answers.some((a,i)=>!Number.isInteger(a)||a<0||a>=unit.quiz[i].choices.length))throw Error('Five valid answers required');
    const correct=answers.filter((a,i)=>a===unit.quiz[i].correct).length,pct=correct*20;
    state.quizScores[w]=Math.max(score(w),pct);state.quizAttempts[w]=(Number(state.quizAttempts[w])||0)+1;
    state.quizHistory[w]??=[];state.quizHistory[w].push({correct,percentage:pct,answers:[...answers]});
    state.quizHistory[w]=state.quizHistory[w].slice(-30);if(pct>=80)delete state.skippedAssessments[w];save();
  }
};
'''
modified=source.replace(needle,replacement+'\n'+bridge)
print(''.join(difflib.unified_diff(source.splitlines(True),modified.splitlines(True),fromfile='a/app.js',tofile='b/app.js')),end='')
