import { useEffect, useRef, useState, useContext } from "react"
import { ChatRoomContext } from "../App"
import ProjectDisplay from "../displayFunctions/projectDisplay"

export default function Nav() {

    const [addProject, setAddProject] = useState(false)

    const [chatRoom, setChatRoom] = useContext(ChatRoomContext)


    function handleCreateProject() {
        setAddProject(true)
        
    }
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus()
        }
        console.log(chatRoom)

        
    })
    function handleSubmit(e:any) {
        e.preventDefault()
        setAddProject(false)
        setChatRoom?.((prevChatRoom:any) => [{name: e.target.children[0].value, data: []}, ...prevChatRoom])
    }
    function handleCancel() {
        setAddProject(false)
    }



    return <div className="nav bg-dark h-100 w-25 d-flex flex-column justify-content-start align-items-center py-5">
        <div className="wrapper d-flex w-100 justify-content-around mb-3">
            <h4 className="title">Chat rooms</h4>
            <button className="addProject btn btn-outline-primary" onClick={handleCreateProject}>+</button>
        </div>
        {addProject? 
        
        <div className="d-flex justify-content-around w-100">
            <form className="" onSubmit={handleSubmit}><input ref={inputRef} type="text" id="text" className="w-100 rounded px-2"/></form>
            <button className="btn btn-outline-danger cancel" onClick={handleCancel}>X</button>
        </div>
        : null}
        {ProjectDisplay(chatRoom)}
    </div>

}