import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDSnnck2qnGKt4-EYlm6ncK2UAOQxwIczI",
  authDomain: "final-c35b0.firebaseapp.com",
  projectId: "final-c35b0",
  storageBucket: "final-c35b0.appspot.com",
  messagingSenderId: "227860048095",
  appId: "1:227860048095:web:78638a3d195a2f63a7e16a"
  };

  
const app =
 initializeApp(firebaseConfig);


const pDB =
 getDatabase(app);

export function addPrizeFire(Prize) {
    const fOne =
     ref(pDB, '/shahryar');
    const fTwo =
     push(fOne);


    const prize = {
       name: Prize, 
    };


    set(fTwo, prize)
      .then(() => {
        console.log('Prize added:', fTwo.key);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
}
