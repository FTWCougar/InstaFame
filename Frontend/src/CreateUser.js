import { Form, Button, Grid, Segment } from "semantic-ui-react";

function CreateUser
() {

//   function handleUsernameChange(e) {
//     setUsername(e.target.value);
//   }

//   function handlePasswordChange(e) {
//     setPassword(e.target.value);
//   }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle" className="user-account">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Form size="large">
          <Segment stacked>
            <img className="logo-words" src="./instafame.png" alt="InstaFame" />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
            //   value={first_name}
              name="first_name"
              placeholder="Enter First Name"
            //   onChange={handleUsernameChange}
              required
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
            //   value={last_name}
              name="last_name"
              placeholder="Enter Last Name"
            //   onChange={handleUsernameChange}
              required
            />
            
            <Form.Input
              fluid
              icon="globe"
              iconPosition="left"
            //   value=" "
            //   name="username"
              placeholder="Create Username"
            //   onChange={handleUsernameChange}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
            //   value=" "
            //   name="password"
              placeholder="Create Password"
            //   onChange={handlePasswordChange}
              type="password"
              required
            />
            <Button className="user-button" fluid size="large">
              Create Account
            </Button>
          </Segment>
        </Form>
        <br />
        <p className="back-arrow">←<span className="back-words"><a href="/">Back to Login Page</a></span></p>
      </Grid.Column>
    </Grid>
  );
}

export default CreateUser;
