import { useContext, useEffect } from "react"
import { ChosenProjectDataContext } from "../App"
import { getAuth } from "firebase/auth"
import { ChosenProjectNameContext } from "../App"
import { db } from "../firebase/firebase"
import { doc, updateDoc} from "firebase/firestore"; 
import { ChosenProjectIndexContext } from "../App"

export default function MessageInput() {

    const [chosenProjectData, setChosenProjectData] = useContext(ChosenProjectDataContext)

    const useChosenProjectName = useContext(ChosenProjectNameContext)

    const useChosenProjectIndex = useContext(ChosenProjectIndexContext)


    
    useEffect(() => {
       updateFirebase()
        console.log(chosenProjectData)
    })


    const auth = getAuth()
    const user = auth.currentUser

    function handleSubmit(e:any) {

            e.preventDefault()
            const message = {
            id: user?.uid,
            message: e.target.children[0].value,
            profileUrl: user?.photoURL,
        }
        if(chosenProjectData){
            setChosenProjectData?.([...chosenProjectData, message])
        }
        console.log(chosenProjectData)
        e.target.children[0].value = ""        
    }
    async function updateFirebase() {
        if(useChosenProjectName?.chosenProjectName && chosenProjectData) {
            await updateDoc(doc(db, "Let's chat", useChosenProjectName?.chosenProjectName), {
                messages: chosenProjectData
            });
        }
    }


    return <div className="messageInput p-4 w-100 d-flex justify-content-end align-items-center gap-3">
        <form className="w-100 d-flex gap-2 align-items-center" onSubmit={handleSubmit}>
            <input type="text" id="text" placeholder="Your message..." className="w-100 rounded px-2" />
        <button className="btn btn-primary" type="submit">Send</button>
        </form>
    </div>
}