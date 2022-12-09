import { Form, Button, Grid, Segment } from "semantic-ui-react";

function Login({ username, password, setUsername, setPassword, handleSubmit }) {
  
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <img className="logo-words" src="./instafame.png" alt="InstaFame" />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              value={username}
              name="username"
              placeholder="Username"
              onChange={handleUsernameChange}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              value={password}
              name="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              type="password"
              required
            />
            <Button className="login-button" fluid size="large">
              Login
            </Button>
            <br />
            <p>
              Need an account? <a href="/CreateUser">Create one here!</a>
            </p>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
