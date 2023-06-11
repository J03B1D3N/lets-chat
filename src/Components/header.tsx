import {provider, auth, handleSignIn, handleSignOut } from "../firebase/firebase"
import { GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { SignedInContext } from "../App";
import { ChosenProjectIndexContext } from "../App";


export default function Header() {

    const user = auth.currentUser

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

   if(user?.photoURL) {

    return <div className="header w-100 bg-dark d-flex align-items-center justify-content-between px-4">
        <h1>Let's Chat</h1>
        {loggedIn ? 
        <div className="wrapper d-flex align-items-center gap-3">
          <img src={user.photoURL} alt="user google profile" className="userIconLogIn rounded-circle"/>
          <div>@{user.displayName}</div>
          <button className="btn btn-primary btn-sm" onClick={handleSignOut}>Sign Out</button>
        </div>
          : <></>}
        
    </div>

   } else return <></>

    
}