import { useEffect, useState } from "react"


type ChatRoomType = {
    name?:string
    data?:object[]
}
type MessageType = {
    uid:string
    profileUrl:string
    data:string
    timeStamp:string
}



function AddChatRoom(a:object) {
    useEffect(() => {
        console.log(chatRoom)
    })
    const [chatRoom, setChatRoom] = useState([{}])  
    setChatRoom([...chatRoom, a])
}

export{AddChatRoom}