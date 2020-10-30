import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var config = {
    apiKey: "AIzaSyABfUk5cGwqcCRtdDdPW1En9OvE6rrlpEc",
    authDomain: "project-plan-ae2f5.firebaseapp.com",
    databaseURL: "https://project-plan-ae2f5.firebaseio.com",
    projectId: "project-plan-ae2f5",
    storageBucket: "project-plan-ae2f5.appspot.com",
    messagingSenderId: "17439361076",
    appId: "1:17439361076:web:5512abfc71ec4d6a"
  };

  console.log('firebase config file')
  // Save goolge account users into google cloud database
  export const createUserProfileDocument = async (userAuth, additionalData) => {

console.log('additionalData ', additionalData)

    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };













  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;


