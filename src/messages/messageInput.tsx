import { useContext} from "react"
import { getAuth } from "firebase/auth"
import { ChosenProjectNameContext } from "../App"
import { db } from "../firebase/firebase"
import { doc, updateDoc} from "firebase/firestore"; 
import { ChosenProjectIndexContext } from "../App"
import { dataContext } from "../App"


export default function MessageInput() {

    const useChosenProjectName = useContext(ChosenProjectNameContext)

    const useChosenProjectIndex = useContext(ChosenProjectIndexContext)

    const [data, setData] = useContext(dataContext)


    
   


    const auth = getAuth()
    const user = auth.currentUser

    function handleSubmit(e:any) {

            e.preventDefault()
        
            updateFirebase(e)     
            e.target.children[0].value = ""   
    }
    async function updateFirebase(e:any) {
        if(useChosenProjectName?.chosenProjectName && (useChosenProjectIndex?.chosenProjectIndex || 
            useChosenProjectIndex?.chosenProjectIndex === 0) && data) {
            await updateDoc(doc(db, "Let's chat", useChosenProjectName?.chosenProjectName), {
                messages: [...data[useChosenProjectIndex?.chosenProjectIndex].data.messages, {
                    id: user?.uid,
                    message: e.target.children[0].value,
                    profileUrl: user?.photoURL,
                    date: new Date(),
                    name: user?.displayName
                }]
            });
        }
    }
    if((useChosenProjectIndex?.chosenProjectIndex || useChosenProjectIndex?.chosenProjectIndex === 0)) {
        return <div className="messageInput p-4 w-100 d-flex justify-content-end align-items-center gap-3" style={{height: "fit-content"}}>
        <form className="w-100 d-flex gap-2 align-items-center" onSubmit={handleSubmit}>
            <input type="text" id="text" placeholder="Your message..." className="w-100 rounded px-2" />
        <button className="btn btn-primary" type="submit">Send</button>
        </form>
    </div>
    } else return <></>

    
}