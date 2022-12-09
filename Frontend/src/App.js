import Header from "./Header";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Logout from "./Logout";
// import CreatePost from "./CreatePost";
import CreateUser from "./CreateUser";
// import ProfilePage from "./ProfilePage";

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((userArray) => {
        setUsers(userArray);
        console.log(userArray);
      });
  }, []);

  return (
    <div>
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
        <Route path="/CreateUser">
          <CreateUser />
        </Route>
        <Route path="/Home">
          <Header />
          <Logout />
          <div>
            <h1 className="greeting">Welcome, {user.first_name}!</h1>
          </div>
          {/* <CreatePost user={user} setPosts={setPosts} posts={posts}/> */}
          <Home users={users} user={user} posts={posts} setPosts={setPosts} />
          {/* <ProfilePage user={user} posts={posts} users={users}/> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
