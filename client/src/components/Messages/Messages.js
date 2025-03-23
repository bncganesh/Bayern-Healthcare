import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Messages = () => {
    const [messages, setMessages] = useState([
        { sender: "Provider", text: "Please monitor your blood glucose regularly." },
        { sender: "You", text: "Sure, doctor. Thank you!" },
    ]);

    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { sender: "You", text: newMessage }]);
            setNewMessage("");
        }
    };

    return (<div className="dashboard-container">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="content">
            <div>
                <h2>Messages</h2>
                <div>
                    {messages.map((msg, index) => (
                        <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </main>
    </div>
    );
};

export default Messages;
