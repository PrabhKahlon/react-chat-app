import { React, useState } from 'react'

export default function Login(props) {
    const [user, setUser] = useState("");

    function handleUser(event) {
        setUser(event.target.value);
    }

    function handleLogin(event) {
        event.preventDefault();
        props.changeUserName(user);
    }

    return (
        <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
            <div className="align-middle border border-secondary rounded p-4 form-group" style={{ width: "95%", maxWidth: "400px", maxHeight: "500px" }}>
                <form className="mx-auto align-middle" onSubmit={handleLogin}>
                    <label className="form-label" htmlFor="username">Username</label>
                    <input className="form-control mb-3" name="username" id="username" type="text" placeholder="Enter Username" value={user} onChange={handleUser}></input>
                    <input className="btn btn-secondary" type="submit" value="Login"></input>
                </form>
            </div>
        </div>
    )
}
