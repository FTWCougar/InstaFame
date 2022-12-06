import Header from "./Header";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { useState } from "react";
import Home from "./Home";
import Logout from "./Logout";

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();

    const userObj = { username, password };

    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(userObj),
    };

    fetch("http://localhost:9292/login", configObject)
      .then((r) => r.json())
      .then((userObj) => {
        console.log(userObj);
        setUser(userObj);
        setUsername("");
        setPassword("");
        history.push('/Home')
      });
  }

  return (
    <div>
        <Header />
      <Switch>
        <Route exact path="/">
          <Login
            handleSubmit={handleSubmit}
            setUsername={setUsername}
            setPassword={setPassword}
            username={username}
            password={password}
          />
        </Route>
        <Route path='/Home'>
          <Logout />
          <Home user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
