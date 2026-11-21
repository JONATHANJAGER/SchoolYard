/** Reuses the existing default Firebase app. Never initializes or replaces config. */
export async function connectStore(onChange=()=>{}, onStatus=()=>{}) {
  const [{getApps},{getAuth,onAuthStateChanged},fs]=await Promise.all([
    import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'),
    import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js')]);
  const app=getApps().find(a=>a.name==='[DEFAULT]');
  if(!app)throw Error('Existing Firebase app is not initialized. See integration instructions.');
  const auth=getAuth(app),db=fs.getFirestore(app);let user=null,unsub=[],generation=0;
  const ref=(kind,id)=>fs.doc(db,'users',user.uid,kind,id);
  const allowed=['davidAcademic','davidConversations'];
  const off=onAuthStateChanged(auth,u=>{
    generation++;unsub.forEach(f=>f());unsub=[];user=u;onChange({reset:true});
    if(!u){onStatus('Sign in through SchoolYard to synchronize records.');return;}
    for(const kind of allowed)unsub.push(fs.onSnapshot(fs.collection(db,'users',u.uid,kind),s=>onChange({kind,records:s.docs.map(d=>({id:d.id,...d.data()}))}),e=>onStatus('Sync unavailable: '+e.code)));
    onStatus('Connected to existing SchoolYard account.');
  });
  return {
    async save(kind,id,value){
      if(!user)throw Error('Sign in before saving academic records');
      if(!allowed.includes(kind)||!id||id.includes('/'))throw Error('Invalid record');
      const g=generation;await fs.setDoc(ref(kind,id),{...value,updatedAt:fs.serverTimestamp()},{merge:true});
      if(g!==generation)throw Error('Account changed during save');
    },
    async deleteHistory(){
      if(!user)throw Error('Sign in first');const uid=user.uid;
      // Stop collection at a fixed snapshot; chunk to stay below batch limits.
      const snap=await fs.getDocs(fs.collection(db,'users',uid,'davidConversations'));
      for(let i=0;i<snap.docs.length;i+=400){const batch=fs.writeBatch(db);snap.docs.slice(i,i+400).forEach(d=>batch.delete(d.ref));await batch.commit();}
    },
    destroy(){off();unsub.forEach(f=>f());user=null;}
  };
}
