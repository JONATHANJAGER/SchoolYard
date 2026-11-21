import {catalog,evidence} from './catalog.mjs';
import {readiness} from '../professor-david/core.mjs';
export class CertificationDashboard extends HTMLElement {
  constructor(){super();this.attachShadow({mode:'open'});this.catalog=catalog;this.records=[];}
  connectedCallback(){this.render();}
  render(){
    const root=this.shadowRoot;root.innerHTML='<style>:host{display:block;background:#10172b;color:#eef1ff;font:16px/1.5 system-ui;padding:24px;position:fixed;inset:20px;z-index:9998;overflow:auto;border:1px solid #536384;border-radius:20px}:host([hidden]){display:none}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}article{background:#1b2540;padding:18px;border-radius:16px}h3{font-size:17px}.muted{color:#b8c9e6}dl{font-size:13px}dd{margin:0 0 10px}dt{color:#b8c9e6}button{padding:12px;background:#324566;color:white;border:1px solid #7287aa;border-radius:10px}@media(max-width:850px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:520px){.grid{grid-template-columns:1fr}:host{inset:0;border-radius:0}}</style>';
    const close=document.createElement('button');close.textContent='Close dashboard';close.onclick=()=>this.hidden=true;root.append(close);
    const heading=document.createElement('h2');heading.textContent='Certification readiness';root.append(heading);
    const note=document.createElement('p');note.textContent='Nine slots are reserved. The curriculum names 13 candidates, but does not select nine exams. Names, versions, prices and registration links require confirmation and official verification. No purchases are made.';root.append(note);
    const grid=document.createElement('div');grid.className='grid';root.append(grid);
    for(const cert of this.catalog){const result=readiness(cert.objectives,this.records.filter(r=>r.type==='exam-evidence'));const card=document.createElement('article'),title=document.createElement('h3');title.textContent=cert.name;card.append(title);const dl=document.createElement('dl');card.append(dl);
      const fields={Provider:cert.provider||'Pending confirmation','Course progress':cert.progress==null?'Not mapped':`${cert.progress}%`,'Exam readiness':result.percentage==null?'Not enough verified evidence':`${result.percentage}%`,'Exam version':cert.examVersion||'Not verified',Strengths:result.areas?.filter(a=>a.score>=.8).map(a=>a.id).join(', ')||'Not measured','Needs improvement':result.areas?.filter(a=>a.score<.8).map(a=>a.id).join(', ')||'Not measured','Next activity':result.reason,'Practice results':this.records.filter(r=>r.type==='practice-exam'&&r.certId===cert.id).map(r=>r.percentage+'%').join(', ')||'No attempts','Exam price':cert.price==null?'Not verified':`${cert.currency} ${cert.price}`,'Authorized discounts':cert.discounts.length?cert.discounts.map(x=>x.name).join(', '):'None verified','Estimated budget':cert.budget==null?'Pending exam selection':`${cert.currency} ${cert.budget}`};
      for(const [key,value] of Object.entries(fields)){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=key;dd.textContent=value;dl.append(dt,dd);}
      if(cert.approved&&cert.verifiedAt&&cert.registrationUrl?.startsWith('https://')){const link=document.createElement('a');link.textContent='Official exam registration';link.href=cert.registrationUrl;link.rel='noopener noreferrer';link.target='_blank';card.append(link);}grid.append(card);
    }
    const sources=document.createElement('p');sources.className='muted';sources.textContent='Blueprint candidates: '+evidence.candidates.join(' · ');root.append(sources);
  }
}
customElements.define('schoolyard-certifications',CertificationDashboard);
