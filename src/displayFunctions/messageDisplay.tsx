import { getAuth } from "firebase/auth"
import { useContext, useEffect, useRef } from "react"
import { ChosenProjectDataContext } from "../App"
import { dataContext } from "../App"
import { ChosenProjectIndexContext } from "../App"




export default function MessageDisplay() {

    const [chosenProjectData, setChosenProjectData] = useContext(ChosenProjectDataContext)
    const [data, setData] = useContext(dataContext)
    const useChosenProjectIndex = useContext(ChosenProjectIndexContext)



    const auth = getAuth()
    const user = auth.currentUser
    useEffect(() => {
        if (messageRef.current) {
          messageRef.current.scrollIntoView(
            {
              behavior: 'auto',
              block: 'end',
              inline: 'nearest'
            })
        }
        console.log(data)
        console.log(useChosenProjectIndex?.chosenProjectIndex)
      })
      const messageRef = useRef<HTMLInputElement>(null)

        if((useChosenProjectIndex?.chosenProjectIndex || useChosenProjectIndex?.chosenProjectIndex === 0) && !Number.isNaN(useChosenProjectIndex?.chosenProjectIndex) && data) {     
            return <div className="messageDisplay">
                {data[useChosenProjectIndex.chosenProjectIndex].data.messages.map((message:any, index:number) => {
           return <>
            {user?.uid === message.id ? 
                <div key={index} className="messageWrapper p-4 w-100 d-flex gap-2 align-items-center mine">
                    <img src={message.profileUrl} alt="users profile" className="rounded-circle userIcon"></img>
                    <div className="message bg-primary px-3 d-flex align-items-center justify-content-start rounded">{message.message}</div>
                </div> 
                : 
                <div key={index} className="messageWrapper p-4 w-100 d-flex gap-2 align-items-center  other">
                    <img src={message.profileUrl} alt="users profile" className="rounded-circle userIcon"></img>
                    <div className="message bg-primary px-3 d-flex align-items-center justify-content-start rounded">{message.message}</div>
                </div>
        }
            </>
        })}
        <div ref={messageRef}></div>
        </div>
          }
            else return <></>
    

   

}