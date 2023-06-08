import Nav from "./nav"
import MessagesTab from "../messages/messagesTab"

export default function Main() {
    return <div className="main bg-dark bg-gradient w-100 h-100 d-flex">
        <Nav></Nav>
        <MessagesTab></MessagesTab>
    </div>
}