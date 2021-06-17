import React from 'react'
import Message from './Message';

export default function Main() {

    function handleMessage(event) {
        event.preventDefault();
    }

    return (
        <div style={{ maxWidth: "1200px" }} className="container-fluid vh-100 border-start border-end border-secondary">
            <div style={{ height: "93%" }} className="d-flex flex-column overflow-auto p-1 pt-4">
                <Message receive="true"/>
                <Message/>
            </div>
            <div style={{ height: "7%" }} className="mx-auto">
                <form className="row align-items-center mx-auto">
                    <div className="col p-0 justify-content-end">
                        <input type="text" className="form-control" id="message" placeholder="Enter Message" />
                    </div>
                    <div className="col-md-auto p-1">
                        <button style={{ maxWidth: "100px" }} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
