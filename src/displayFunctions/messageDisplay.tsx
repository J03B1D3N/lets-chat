import { getAuth } from "firebase/auth"
import { useContext } from "react"
import { ChosenProjectContext } from "../App"

const auth = getAuth()
const user = auth.currentUser

export default function MessageDisplay() {

    const [chosenProject, setChosenProject] = useContext(ChosenProjectContext)

    

    return<> {chosenProject!.map((message:any) => {
        return <>
        {user!.uid === message.uid ? 
            <div className="messageWrapper m-4 w-100 p-1 d-flex mine">
                <img src={message.photoURL} alt="users profile"></img>
                <div className="message bg-primary px-3 py-1 rounded">{message.data}</div>
                <div className="timestamp">{message.timestamp}</div>
            </div> 
            : 
            <div className="messageWrapper m-4 w-100 p-1 d-flex other">
                <img src={message.photoURL} alt="users profile"></img>
                <div className="message bg-primary px-3 py-1 rounded">{message.data}</div>
                <div className="timestamp">{message.timestamp}</div>
            </div>}
            
        </>
    })}
    </>

}