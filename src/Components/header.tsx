import {provider, auth, handleSignIn, handleSignOut } from "../firebase/firebase"
import { GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { SignedInContext } from "../App";
import { ChosenProjectIndexContext } from "../App";


export default function Header() {

    const user:any = auth.currentUser

    const [loggedIn, setLoggedIn] = useContext(SignedInContext)
    const useChosenProjectIndex = useContext(ChosenProjectIndexContext)

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //user is signed in
          const uid = user.uid
          const userId = uid
          // console.log(userId)
          // console.log(user.photoURL)
          const token = user.getIdToken()
          setLoggedIn?.(true)
          // console.log("logged in")
    
        } else {
            setLoggedIn?.(false)
            useChosenProjectIndex?.setChosenProjectIndex(NaN)
          // User is signed out
          // ...
          console.log("logged out")
        }
      });

    })
   

    return <div className="header w-100 bg-dark d-flex align-items-center justify-content-between px-4">
        <h1 className="p-10">Let's Chat</h1>
        {loggedIn ? <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
          : <></>}
        
    </div>
}