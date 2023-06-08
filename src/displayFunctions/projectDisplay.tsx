import { useContext, useEffect } from "react"
import { ChosenProjectDataContext } from "../App"
import { ChosenProjectNameContext } from "../App"

export default function ProjectDisplay(projects:any) {

    const [chosenProjectData, setChosenProjectData] = useContext(ChosenProjectDataContext)

    const [chosenProjectName, setChosenProjectName] = useContext(ChosenProjectNameContext)

    function handleClick(project:any) {
        setChosenProjectData?.(project.data.messages)
        setChosenProjectName?.(project.id)
    }

    


    return projects?.map((project:any, index:number) =>{
       return <div key={index} className="project border border-primary p-1 px-2 my-2 rounded btn btn-outline-primary text-light" 
        onClick={() =>  handleClick(project)}>{project.id}</div>
    })
}
