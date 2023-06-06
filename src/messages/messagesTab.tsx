import MessageInput from "./messageInput"
import Messages from "./messages"


export default function MessagesTab() {
    return <div className="messages bg-transparent w-100 d-flex flex-column justify-content-end align-items-end">
        <Messages></Messages>
        <MessageInput></MessageInput>
    </div>
}