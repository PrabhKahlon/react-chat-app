import React from 'react'

export default function Main() {

    function handleMessage(event) {
        event.preventDefault();
    }

    return (
        <div style={{maxWidth: "1200px"}} className="container-fluid vh-100 border-start border-end border-secondary">
            <div style={{height: "93%"}}></div>
            <div style={{height: "7%"}} className="mx-auto">
                <form class="row align-items-center mx-auto">
                    <div class="col p-0 justify-content-end">
                        <input type="text" class="form-control" id="message" placeholder="Enter Message" />
                    </div>
                    <div class="col-md-auto p-1">
                        <button style={{maxWidth: "100px"}} type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
