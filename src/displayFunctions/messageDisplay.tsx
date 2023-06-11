import { getAuth } from "firebase/auth"
import { useContext, useEffect, useRef } from "react"
import { dataContext } from "../App"
import { ChosenProjectIndexContext } from "../App"




export default function MessageDisplay() {

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
      })
      const messageRef = useRef<HTMLInputElement>(null)

        if((useChosenProjectIndex?.chosenProjectIndex || useChosenProjectIndex?.chosenProjectIndex === 0) && data) {     
            return <div className="messageDisplay">
                {data[useChosenProjectIndex.chosenProjectIndex].data.messages.map((message:any, index:number) => {
           return <>
            {user?.uid === message.id ? 
                <div key={index} className="messageWrapper p-2 w-100 d-flex gap-2 align-items-end mine">
                    <div className="wrapper d-flex flex-column justify-content-center align-items-end">
                      <div>{message.date.toDate().toDateString()}, {message.date.toDate().toLocaleTimeString()} @ {message.name}</div>
                      <div className="d-flex align-items-start gap-2">
                        <div className="message bg-primary px-3 d-flex align-items-center
                         justify-content-start rounded">{message.message}</div>
                        <img src={message.profileUrl} alt="users profile" className="rounded-circle userIcon"></img>
                      </div>
                       
                    </div>
                </div> 
                : 
                <div key={index} className="messageWrapper p-2 w-100 d-flex gap-2 align-items-center  other">
                    <div className="wrapper d-flex flex-column justify-content-center align-items-start">
                      <div>{message.name} @ {message.date.toDate().toDateString()}, {message.date.toDate().toLocaleTimeString()}</div>
                      <div className="d-flex align-items-start gap-2">
                        <img src={message.profileUrl} alt="users profile" className="rounded-circle userIcon"></img>
                        <div className="message bg-primary px-3 d-flex align-items-center
                         justify-content-start rounded">{message.message}</div>
                      </div>
                       
                    </div>
                </div>
        }
            </>
        })}
        <div ref={messageRef}></div>
        </div>
          }
            else return <></>
    

   

}