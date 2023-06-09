import { useContext, useEffect } from "react"
import { ChosenProjectDataContext } from "../App"
import { ChosenProjectNameContext } from "../App"
import { dataContext } from "../App"
import { ChosenProjectIdContext } from "../App"

export default function ProjectDisplay() {

    const [chosenProjectData, setChosenProjectData] = useContext(ChosenProjectDataContext)
    const [data, setData] = useContext(dataContext)


    const useChosenProjectName = useContext(ChosenProjectNameContext)
    const useChosenProjectId = useContext(ChosenProjectIdContext)


    function handleClick(project:any) {
        setChosenProjectData?.(project.data.messages)
    }

    useEffect(() => {

    }, [data])

    


    return data?.map((project:any, index:number) =>{
       return <div key={index} className="project border border-primary p-1 px-2 my-2 rounded btn btn-outline-primary text-light" 
        onClick={() =>  handleClick(project)}>{project.id}</div>
    })
}
