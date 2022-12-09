import React, { useState } from "react";
import { Form, Button, Grid } from "semantic-ui-react";

function CreatePost({ user, setPosts }) {
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  // const [newPostArray, setNewPostArray] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log(user);

    const postObj = { image, body, user_id: user.id };

    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(postObj),
    };

    fetch("http://localhost:9292/posts", configObject)
      .then((r) => r.json())
      .then((postReturn) => {
        setPosts((posts) => [postReturn, ...posts]);
        setImage("");
        setBody("");
      });
  }

  function handleImageChange(e) {
    setImage(e.target.value);
  }

  function handleCaptionChange(e) {
    setBody(e.target.value);
  }

  return (
    <Grid textAlign="center" verticalAlign="middle" className="post-input">
      <Grid.Column style={{ maxWidth: 430 }}>
        <Form size="large" onSubmit={handleSubmit}>
          <Form.Input
            fluid
            icon="globe"
            iconPosition="left"
            placeholder="Insert Image URL Here"
            onChange={handleImageChange}
            required
          />
          <Form.Input
            fluid
            icon="comment"
            iconPosition="left"
            placeholder="What would you like to tell the world today"
            onChange={handleCaptionChange}
            required
          />
          <Button className="post-button" fluid size="large">
            Create Post
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default CreatePost;
