/** A confirmation advances guidance, never awards completion. */
export class DesktopLab {
  constructor({lesson,save,verify=null}){this.lesson=lesson;this.save=save;this.verify=verify;this.step=0;}
  current(){return this.lesson.demo[this.step]||null;}
  async confirm(){if(this.step<this.lesson.demo.length)this.step++;await this.save('lab-'+this.lesson.id,{type:'lab-queue',lessonId:this.lesson.id,step:this.step,status:'pending'});return this.current();}
  async submitEvidence(evidence){
    if(this.step<this.lesson.demo.length)throw Error('Complete the guided steps before submitting evidence');
    if(!evidence?.trim())throw Error('Provide sanitized evidence');
    if(!this.verify){await this.save('lab-'+this.lesson.id,{type:'lab-queue',lessonId:this.lesson.id,status:'awaiting-review',evidence});return {verified:false,status:'awaiting-review'};}
    // The verifier must authenticate the user and write its own immutable verified record.
    // Its client response is display-only and cannot grant academic completion here.
    return await this.verify({lessonId:this.lesson.id,evidence});
  }
}
