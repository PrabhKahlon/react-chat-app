import React from 'react'

export default function Message(props) {

    let receiveStyle = "toast show mb-2";
    let sendStyle = "toast show align-self-end mb-2";

    console.log(props.message);

    if(props.message.join) {
        return (
            <div className="mb-2 align-self-center">
                <p className="text-muted">{props.message.username} has connected</p>
            </div>
        );
    } else if (props.message.leave) {
        return (
            <div className="mb-2 align-self-center">
                <p className="text-muted">{props.message.username} has disconnected</p>
            </div>
        );
    } else {
    return (
        <div className={props.message.receive ? receiveStyle : sendStyle} role="alert" aria-live="assertive" aria-atomic="true" id="messageReceived">
            <div className="toast-header">
                <strong className="me-auto">{props.message.username}</strong>
                <small>{new Date(props.message.date).toLocaleString([], {weekday: "short", hour: "2-digit", minute: "2-digit"})}</small>
            </div>
            <div className="toast-body">
                {props.message.data}
            </div>
        </div>
    );
    }
}
