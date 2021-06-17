import { React, useState, useEffect } from "react";
import Main from "./components/Main";
import Login from "./components/Login";
import io from "socket.io-client";

function App() {
  const [username, setUsername] = useState(null);
  const [connected, setConnected] = useState(false);
  const [socket, setSocket] = useState(null);

  //Connect with the server only once.
  useEffect(() => {
    let socket = io();
    socket.on("connect", () => {
      setConnected(true);
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
    console.log(socket);
    socket.emit("newUser", name);
  }
  if (socket) {
    return (
      <div className="App">
        {username ? <Main socket={socket} /> : <Login changeUserName={changeUser} />}
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
