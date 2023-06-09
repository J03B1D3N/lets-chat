import { getAuth } from "firebase/auth"
import { useContext, useEffect, useRef } from "react"
import { ChosenProjectDataContext } from "../App"
import { dataContext } from "../App"



export default function MessageDisplay() {

    const [chosenProjectData, setChosenProjectData] = useContext(ChosenProjectDataContext)
    const [data, setData] = useContext(dataContext)



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
      })
      const messageRef = useRef<HTMLInputElement>(null)

    

   return <div className="messageDisplay">
   {chosenProjectData?.map((message:any, index) => {
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