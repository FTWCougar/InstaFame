import { Form, Button, Grid, Segment } from "semantic-ui-react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const history = useHistory();

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleProfileImgChange(e) {
    setProfileImg(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    const userObj = {
      first_name: firstName,
      last_name: lastName,
      username,
      password,
      profile_img: profileImg,
    };
    console.log(userObj);

    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(userObj),
    };

    fetch("http://localhost:9292/users", configObject)
      .then((r) => r.json())
      .then((user) => {
        setFirstName("");
        setLastName("");
        setUsername("");
        setPassword("");
        setProfileImg("");
        history.push("/");
      });
  }

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
      className="user-account"
    >
      <Grid.Column style={{ maxWidth: 400 }}>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <img className="logo-words" src="./instafame.png" alt="InstaFame" />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              value={firstName}
              name="first_name"
              placeholder="Enter First Name"
              onChange={handleFirstNameChange}
              required
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              value={lastName}
              name="last_name"
              placeholder="Enter Last Name"
              onChange={handleLastNameChange}
              required
            />
            <Form.Input
              fluid
              icon="globe"
              iconPosition="left"
              value={username}
              name="username"
              placeholder="Create Username"
              onChange={handleUsernameChange}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              value={password}
              name="password"
              placeholder="Create Password"
              onChange={handlePasswordChange}
              type="password"
              required
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              value={profileImg}
              name="profileImg"
              placeholder="Insert Profile Img URL Here"
              onChange={handleProfileImgChange}
              required
            />
            <Button className="user-button" fluid size="large">
              Create Account
            </Button>
          </Segment>
        </Form>
        <br />
        <p className="back-arrow">
          ←
          <span className="back-words">
            <a href="/">Back to Login Page</a>
          </span>
        </p>
      </Grid.Column>
    </Grid>
  );
}

export default CreateUser;
