/* CYBER-COURSE 2.2 Firebase sync add-on (Firebase Modular SDK).
   Login alone never overwrites existing local or cloud grades. Explicitly choose a copy. */
const byId = id => document.getElementById(id);
const status = message => { byId('firebaseStatus').textContent = message; };
const toggle = () => { const panel=byId('firebasePanel');panel.hidden=!panel.hidden;byId('firebaseToggle').setAttribute('aria-expanded',String(!panel.hidden)); };
byId('firebaseToggle').addEventListener('click',toggle);
byId('firebaseClose').addEventListener('click',()=>{byId('firebasePanel').hidden=true;byId('firebaseToggle').setAttribute('aria-expanded','false');});
const config = window.CYBER_FIREBASE_CONFIG;
const ready = config && ['apiKey','authDomain','projectId','appId'].every(k=>typeof config[k]==='string' && config[k] && !config[k].startsWith('PASTE_'));
if(!ready){
  status('Not configured yet. Edit firebase-config.js with your Web app configuration, then enable Email/Password Authentication and publish firestore.rules. Your lessons and local grades still work.');
  byId('firebaseAuthControls').hidden=true;
}else{
  try{
    const {initializeApp}=await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js');
    const {getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}=await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js');
    const {getFirestore,doc,getDoc,setDoc,serverTimestamp}=await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js');
    const app=initializeApp(config),auth=getAuth(app),db=getFirestore(app);
    let syncing=false,selected=false,pending=null,timer=null,activeUid=null;
    const bridge=()=>window.CYBER_COURSE_PROGRESS_BRIDGE;
    const reference=()=>doc(db,'users',auth.currentUser.uid,'progress','main');
    const payload=()=>{const s=bridge().get();delete s.ui;delete s.archivedProgress;return s;};
    const write=async()=>{
      if(!auth.currentUser||!selected||syncing)return;
      syncing=true;clearTimeout(timer);byId('firebaseSyncNow').disabled=true;status('Saving progress to your private Firestore record…');
      try{await setDoc(reference(),{payload:payload(),clientUpdatedAt:new Date().toISOString(),serverUpdatedAt:serverTimestamp()});status('Cloud sync saved. Your local progress is also retained.');}
      catch(e){status('Could not save online ('+(e.code||'connection error')+'). Your device still has its local progress.');}
      finally{syncing=false;byId('firebaseSyncNow').disabled=!selected;}
    };
    const queue=()=>{if(!selected||!auth.currentUser)return;clearTimeout(timer);timer=setTimeout(write,1700);};
    window.addEventListener('cybercourse:progress-saved',queue);
    const resetPanel=()=>{selected=false;pending=null;clearTimeout(timer);byId('firebaseSyncNow').disabled=true;byId('firebaseChoose').hidden=true;};
    onAuthStateChanged(auth,async(user)=>{
      resetPanel();const uid=user?.uid||null;activeUid=uid;
      byId('firebaseAuthControls').hidden=!!user;byId('firebaseUserControls').hidden=!user;
      if(!user){status('Not signed in. Grades continue to save locally.');return;}
      byId('firebaseSignedInAs').textContent='Signed in as '+(user.email||'student');
      status('Checking for existing cloud progress…');
      try{
        const snapshot=await getDoc(reference());if(activeUid!==uid)return;
        pending=snapshot.exists()?snapshot.data().payload:null;
        byId('firebaseChoose').hidden=false;
        status(pending?'Cloud progress found. Choose which copy to use before syncing.':'No cloud progress found. Choose Upload this device’s progress to begin cloud sync.');
        byId('firebaseUseCloud').disabled=!pending;
      }catch(e){status('Cannot read Firestore ('+(e.code||'connection error')+'). Check rules and internet; local progress remains available.');}
    });
    byId('firebaseAuthForm').addEventListener('submit',async(e)=>{e.preventDefault();try{await signInWithEmailAndPassword(auth,byId('firebaseEmail').value.trim(),byId('firebasePassword').value);byId('firebasePassword').value='';}catch(err){status('Sign-in failed: '+(err.code||'check email/password and Firebase settings'));}});
    byId('firebaseSignUp').addEventListener('click',async()=>{const email=byId('firebaseEmail').value.trim(),pass=byId('firebasePassword').value;if(!email||pass.length<6){status('Enter an email and password with at least six characters.');return;}try{await createUserWithEmailAndPassword(auth,email,pass);byId('firebasePassword').value='';}catch(err){status('Account creation failed: '+(err.code||'check Email/Password provider'));}});
    byId('firebaseUseCloud').addEventListener('click',()=>{if(!pending)return;if(!confirm('Use cloud progress here? It replaces this device’s current learning progress. Export a local backup first.'))return;try{bridge().apply(pending);selected=true;byId('firebaseChoose').hidden=true;byId('firebaseSyncNow').disabled=false;status('Cloud progress loaded. Future edits will sync automatically.');}catch(e){status('Could not load cloud progress. Your local copy is still available.');}});
    byId('firebaseUseLocal').addEventListener('click',async()=>{if(!confirm('Upload this device’s learning progress? It will replace existing cloud progress. Back up both copies first.'))return;selected=true;byId('firebaseChoose').hidden=true;await write();});
    byId('firebaseSyncNow').addEventListener('click',write);
    byId('firebaseSignOut').addEventListener('click',async()=>{resetPanel();await signOut(auth);});
    status('Firebase configured. Sign in to use cloud progress.');
  }catch(e){status('Firebase libraries could not load. Check your internet connection and project configuration. Your local progress still works.');}
}
