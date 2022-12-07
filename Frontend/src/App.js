import Header from "./Header";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Logout from "./Logout";
import CreatePost from "./CreatePost";

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);

  const history = useHistory();

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
        if (userObj) {
          setUser(userObj);
          history.push("/Home");
        } else {
          history.push("/");
          alert("Please try again");
        }
        setUsername("");
        setPassword("");
      });
  }

  useEffect(() => {
    fetch("http://localhost:9292/posts")
      .then((r) => r.json())
      .then((postArray) => {
        setPosts(postArray);
        console.log(postArray);
      });
  }, []);

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
        <Route path="/Home">
          <Logout />
          <CreatePost user={user} setPosts={setPosts} posts={posts} />
          <Home user={user} posts={posts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
