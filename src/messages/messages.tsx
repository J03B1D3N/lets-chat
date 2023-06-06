export default function Messages() {
    return <div className="messages w-100 h-100 d-flex flex-column justify-content-end align-items-center p-4">
        <div className="messageWrapper m-4 w-100 p-1 d-flex mine">
            <div className="message bg-primary px-3 py-1 rounded">this is a message</div>
            
        </div>
        <div className="messageWrapper m-4 w-100 p-1 d-flex other">
            <div className="message bg-primary px-3 py-1 rounded">this is a message</div>
            
        </div>
    </div>
}