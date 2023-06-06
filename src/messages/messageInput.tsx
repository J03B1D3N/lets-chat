export default function MessageInput() {
    return <div className="messageInput p-4 w-100 d-flex justify-content-end align-items-center gap-3">
        <form className="w-100">
            <input type="text" id="text" placeholder="Your message..." className="w-100 rounded px-2" />
        </form>
        <button className="btn btn-primary">Send</button>
    </div>
}