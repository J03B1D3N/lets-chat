import { useContext, useEffect } from "react"
import { ChosenProjectDataContext } from "../App"
import { getAuth } from "firebase/auth"
import { ChosenProjectNameContext } from "../App"
import { db } from "../firebase/firebase"
import { doc, setDoc } from "firebase/firestore"; 

export default function MessageInput() {

    const [chosenProjectData, setChosenProjectData] = useContext(ChosenProjectDataContext)

    const [chosenProjectName, setChosenProjectName] = useContext(ChosenProjectNameContext)

    
    useEffect(() => {
        console.log(chosenProjectData)
    }, [chosenProjectData])
    const auth = getAuth()
    const user = auth.currentUser

    async function handleSubmit(e:any) {
        e.preventDefault()
        const message = {
            id: user?.uid,
            message: e.target.children[0].value,
            profileUrl: user?.photoURL
        }
        e.target.children[0].value = ""
        setChosenProjectData?.((data:object[]) => [...data, message])

        // await setDoc(doc(db, chosenProjectName,), {
        //     name: "Los Angeles",
        //     state: "CA",
        //     country: "USA"
        //   });
    }


    return <div className="messageInput p-4 w-100 d-flex justify-content-end align-items-center gap-3">
        <form className="w-100 d-flex gap-2 align-items-center" onSubmit={handleSubmit}>
            <input type="text" id="text" placeholder="Your message..." className="w-100 rounded px-2" />
        <button className="btn btn-primary">Send</button>
        </form>
    </div>
}