import { useEffect, useRef, useState, useContext } from "react"
import { dataContext } from "../App"
import ProjectDisplay from "../displayFunctions/projectDisplay"
import { setDoc, doc } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function Nav() {

    const [addProject, setAddProject] = useState(false)

    const [data, setData] = useContext(dataContext)
    function handleCreateProject() {
        setAddProject(true)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        
        if(inputRef.current) {
            inputRef.current.focus()
        }
    })
    function handleCancel() {
        setAddProject(false)
    }
    async function handleSubmit(e:any) {
        try {

            e.preventDefault()
            setAddProject(false)
            // setData?.((prevdata:any) => [{id: e.target.children[0].value, messages: []}, ...prevdata])
            await setDoc(doc(db, "Let's chat", e.target.children[0].value), {
                date: new Date(),
                messages: []
            })  

        } catch(error) {
            console.log(error)
        }
    }

  

    return <div className="nav bg-dark flex-column justify-content-start align-items-center">
        <div className="wrapper d-flex w-100 justify-content-center gap-2">
            <h4 className="title ">Chat rooms</h4>
            <button className="addProject btn btn-outline-primary btn-sm" onClick={handleCreateProject}>+</button>
        </div>
        {addProject? 
        
        <div className="input d-flex align-items-center justify-content-center w-100">
            <form className="d-flex justify-content-center align-items-center w-75 gap-3" onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" id="text" className="w-100 rounded px-2" required/>
                <button className="btn btn-outline-danger cancel btn-sm" onClick={handleCancel}>X</button>
            </form>
        </div>
        : null}
        <div className="projectDisplay px-4">{ProjectDisplay?.()}</div>
    </div>

}