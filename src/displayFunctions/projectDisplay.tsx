
export default function ProjectDisplay(projects:object[] | undefined) {
    return projects?.map((project:any) =>{
       return <div className="project border border-primary p-1 px-2 my-2 rounded btn btn-outline-primary text-light">{project.name}</div>
    })
}
