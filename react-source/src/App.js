import { React, useState, useEffect } from "react";
import Main from "./components/Main";
import Login from "./components/Login";
import io from "socket.io-client";

function App() {
  const [username, setUsername] = useState(null);
  const [socket, setSocket] = useState(null);

  //Connect with the server only once.
  useEffect(() => {
    let socket = io();
    socket.on("connect", () => {
      setSocket(socket);
    })
    return () => {
      socket.off("connect");
      socket.disconnect();
    }
  }, [])

  //Sets the username for the session
  function changeUser(name) {
    setUsername(name);
    socket.emit("newUser", name);
  }

  if (socket) {
    return (
      <div className="App">
        {username ? <Main username={username} socket={socket} /> : <Login changeUserName={changeUser} />}
      </div>
    );
  } else {
    return (
      <div>
        Connecting...
      </div>
    );
  }
}

export default App;
