import MessageInput from "./messageInput"
import MessageDisplay from "../displayFunctions/messageDisplay"


export default function MessagesTab() {
    return <div className="messages bg-transparent w-100 d-flex flex-column justify-content-end align-items-end">
        <MessageDisplay></MessageDisplay>
        <MessageInput></MessageInput>
    </div>
}