import React, { useState } from "react";

function CreatePost({ user, setPosts, posts }) {
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
    <>
      <form onSubmit={handleSubmit} className="create-post-form">
        <input
          onChange={handleImageChange}
          value={image}
          placeholder="Image URL"
          required
        ></input>
        <input
          onChange={handleCaptionChange}
          value={body}
          placeholder="Caption"
          required
        ></input>
        <button>Post</button>
      </form>
    </>
  );
}

export default CreatePost;
