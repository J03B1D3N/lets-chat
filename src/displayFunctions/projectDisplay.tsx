import { useContext } from "react"
import { ChosenProjectContext } from "../App"

export default function ProjectDisplay(projects:object[] | undefined) {

    const [chosenProject, setChosenProject] = useContext(ChosenProjectContext)


    return projects?.map((project:any, index) =>{
       return <div className="project border border-primary p-1 px-2 my-2 rounded btn btn-outline-primary text-light" 
        onClick={setChosenProject?.(project.data)}>{project.name}</div>
    })
}
