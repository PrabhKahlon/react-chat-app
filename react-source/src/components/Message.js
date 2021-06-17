import React from 'react'

export default function Message(props) {

    let receiveStyle = "toast show";
    let sendStyle = "toast show align-self-end";

    return (
        <div className={props.receive ? receiveStyle : sendStyle} role="alert" aria-live="assertive" aria-atomic="true" id="messageReceived">
            <div className="toast-header">
                <strong className="me-auto">Username</strong>
                <small>4:05pm</small>
            </div>
            <div className="toast-body">
                Hello, world! This is a {props.receive ? "received" : "sent"} message.
            </div>
        </div>
    )
}
