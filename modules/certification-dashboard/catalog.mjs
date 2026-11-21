// Preserve source names. Candidate mentions are NOT an approved nine-exam selection.
export const evidence = {
  repository:'JONATHANJAGER/SchoolYard', inspectedCommit:'189c08ad5b32e2e509da76a46d26cfd4628a6e8d',
  source:'materials/Gemini_Nine_Course_Architecture_Source.docx',
  candidates:['CompTIA Security+','CompTIA Network+','AWS Certified Solutions Architect','CompTIA CySA+','CompTIA PenTest+','CEH','Microsoft SC-200','AWS Security Specialty','Python Institute PCAP','SSCP','CISM','PMI CAPM','CISSP'],
  curriculumEntries:['CompTIA Security+','CompTIA CySA+','CompTIA PenTest+','Microsoft SC-200','AWS Security Learning','PMI CAPM','CISM / CISSP domain preparation']
};
export const catalog=Array.from({length:9},(_,i)=>({id:`slot-${i+1}`,name:`Certification ${i+1} — selection pending`,provider:null,examVersion:null,objectives:[],courseIds:[],registrationUrl:null,verifiedAt:null,price:null,currency:'USD',discounts:[],budget:null,approved:false}));
export function examUnlocked(cert,completedCourseIds,bank){return cert.approved && cert.courseIds.length>0 && cert.courseIds.every(id=>completedCourseIds.includes(id)) && bank?.reviewed===true && bank.examVersion===cert.examVersion && bank.fullLength===true;}
