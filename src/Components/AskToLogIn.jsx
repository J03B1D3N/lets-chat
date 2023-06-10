import { handleSignIn } from "../firebase/firebase"


export default function AskToLogIn() {
    return <div className="askToLogIn bg-dark bg-gradient d-flex flex-column
     justify-content-center align-items-center gap-3">
         <h1 className="message">Please sign in to begin</h1>
         <button className="btn btn-primary" onClick={handleSignIn}>Sign In</button>
    </div>
}