// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDocs, collection } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBNANU-Y6N0THrqxSMOtbArIuqR4am4cYo",
    authDomain: "let-s-chat-1bb9c.firebaseapp.com",
    projectId: "let-s-chat-1bb9c",
    storageBucket: "let-s-chat-1bb9c.appspot.com",
    messagingSenderId: "222409107627",
    appId: "1:222409107627:web:a274db221720b9333fafee"
  };
  
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export {db}

// querrySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data())
// })

const provider = new GoogleAuthProvider();
const auth = getAuth()



  async function handleSignOut() {

    try {
        const toSignOut = await signOut(auth)

    }
    catch (error) {
        console.log(error)
    }


    

  }
  async function handleSignIn() {
    try {
        const result = await signInWithPopup(auth, provider)
        const user = result.user
    }
    catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
         // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

    }
}

export {provider, auth, handleSignIn, handleSignOut}

