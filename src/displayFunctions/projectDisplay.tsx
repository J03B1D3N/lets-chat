import { useContext, useEffect } from "react"
import { ChosenProjectDataContext } from "../App"
import { ChosenProjectNameContext } from "../App"
import { dataContext } from "../App"
import { ChosenProjectIndexContext } from "../App"

export default function ProjectDisplay() {

    const [chosenProjectData, setChosenProjectData] = useContext(ChosenProjectDataContext)
    const [data, setData] = useContext(dataContext)


    const useChosenProjectName = useContext(ChosenProjectNameContext)
    const useChosenProjectIndex = useContext(ChosenProjectIndexContext)


    function handleClick(project:any, index:number) {
        setChosenProjectData?.(project.data.messages)
        useChosenProjectName?.setChosenProjectName(project.id)
        useChosenProjectIndex?.setChosenProjectIndex(index)
    }

    useEffect(() => {

    }, [data])

    


    return data?.map((project:any, index:number) =>{
        if(useChosenProjectIndex?.chosenProjectIndex === index) {
            return <div key={index} className="project border border-primary p-1 px-2 my-2 rounded btn btn-outline-primary active text-light" 
            onClick={() =>  handleClick(project, index)}>{project.id}</div>
        } else {
            return <div key={index} className="project border border-primary p-1 px-2 my-2 rounded btn btn-outline-primary text-light" 
            onClick={() =>  handleClick(project, index)}>{project.id}</div>
        }
       
    })
}
