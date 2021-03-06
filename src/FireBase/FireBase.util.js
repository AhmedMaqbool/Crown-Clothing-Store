import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config=
{
    apiKey: "AIzaSyASapVOYGBbBPR8QsZUj02B914HjBSM9V4",
    authDomain: "crwn-db-95988.firebaseapp.com",
    databaseURL: "https://crwn-db-95988.firebaseio.com",
    projectId: "crwn-db-95988",
    storageBucket: "crwn-db-95988.appspot.com",
    messagingSenderId: "782495302748",
    appId: "1:782495302748:web:184f8952ee8d1f925e1299",
    measurementId: "G-Y788QBCNT8"
  };

  export const createUserProfile=async(userAuth,additionalData)=>{
            
    if(!userAuth) 
    
      return;
    
      
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists)
    {
       const {displayName,email}=userAuth;
       const createdAt=new Date();
    
    
       try{
        await userRef.set({    

         displayName,email,createdAt,...additionalData

        })

      }catch(error)
      {
         console.log('Error creating user',error.message);
         
      }
        }

        return userRef;
     };
  
  firebase.initializeApp(config);
  export const auth =firebase.auth();
  export const firestore=firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;

