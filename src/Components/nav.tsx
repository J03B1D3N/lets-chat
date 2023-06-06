import { useEffect, useRef, useState } from "react"

export default function Nav() {

    const [addProject, setAddProject] = useState(false)
    const [projectName, setProjectName] = useState()

    function handleCreateProject() {
        setAddProject(true)
        
    }
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log(projectName)
        if(inputRef.current) {
            inputRef.current.focus()
        }
        
    })
    function handleSubmit(e:any) {
        e.preventDefault()
        setProjectName(e.target.children[0].value)
        setAddProject(false)
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
    </div>

}