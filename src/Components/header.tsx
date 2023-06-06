import { signInWithPopup } from "firebase/auth"
import {provider, auth, handleSignIn, handleSignOut } from "../firebase/firebase"
import { GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";


export default function Header() {

    const user:any = auth.currentUser

    const [loggedIn, setLoggedIn] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
          //user is signed in
          const uid = user.uid
          const userId = uid
          const token = user.getIdToken()
          setLoggedIn(true)
          console.log("logged in")
    
        } else {
            setLoggedIn(false)
          // User is signed out
          // ...
          console.log("logged out")
        }
      });

    
      

    

    



    return <div className="header w-100 bg-dark d-flex align-items-center justify-content-between px-4">
        <h1 className="p-10">Let's Chat</h1>
        {loggedIn ? <img className="userIcon my-2 rounded-circle" src={user.photoURL} alt="User's googpe profile" onClick={handleSignOut}></img> : <button className="btn btn-primary" onClick={handleSignIn}>Login</button>}
        
    </div>
}