import {React, useState} from "react";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  const [username, setUsername] = useState(null);

  function changeUser(name) {
    setUsername(name);
  }

  return (
    <div className="App">
      {username ? <Main/> : <Login changeUserName={changeUser}/>}
    </div>
  );
}

export default App;
