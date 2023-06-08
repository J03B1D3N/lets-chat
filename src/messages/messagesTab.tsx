import MessageInput from "./messageInput"
import MessageDisplay from "../displayFunctions/messageDisplay"


export default function MessagesTab() {
    return <div className="messages">
        <div className="messageDisplay">{MessageDisplay()}</div>
        <MessageInput></MessageInput>
    </div>
}