import { React, useEffect, useState } from 'react'
import Message from './Message';
import UserList from './UserList';

export default function Main(props) {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        props.socket.on("messageReceive", (data) => {
            console.log(data);
            setMessageList(m => [...m, { id: data.id, username: data.username, data: data.data, date: data.date, receive: true }]);
        });
        return () => {
            props.socket.off("messageReceive");
        }
    }, [props.socket]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(message, props.socket.id);
        let msgObj = { id: props.socket.id, username: props.username, data: message, date: new Date().getTime(), receive: false };
        props.socket.emit("messageSend", msgObj);
        setMessageList(m => [...m, msgObj]);
    }

    console.log(messageList);

    return (
        <>
            <div style={{ maxWidth: "1200px" }} className="container-fluid vh-100 border-start border-end border-secondary">
                <div style={{ height: "93%" }} className="d-flex flex-column overflow-auto p-1 pt-4">
                    {messageList.map((message, i) => {
                        return (<Message key={i} message={message} />);
                    })}
                </div>
                <div style={{ height: "7%" }} className="mx-auto">
                    <form className="row align-items-center mx-auto" onSubmit={handleSubmit}>
                        <div className="col p-0 justify-content-end">
                            <input type="text" className="form-control" id="message" placeholder="Enter Message" value={message} onChange={(event) => { setMessage(event.target.value) }} />
                        </div>
                        <div className="col-md-auto p-1">
                            <button style={{ maxWidth: "100px" }} type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <UserList socket={props.socket}></UserList>
        </>
    )
}
