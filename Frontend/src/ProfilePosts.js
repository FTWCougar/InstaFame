import React from "react";
import { useState } from "react";
import { Form, Button, Grid } from "semantic-ui-react";

function ProfilePosts({ posts, user, setPosts, post, users }) {
  
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);

  const mappedComments = post.comments.map((comment) => {
    let commentUser = "";
    users.map((user) => {
      if (comment.user_id === user.id) {
        commentUser = user.username;
      }
    });
    return (
      <li key={comment.id}>
        {comment.body} - <em>{commentUser}</em>
      </li>
    );
  });
  const [edit, setEdit] = useState(false);

  function onDelete(id) {
    // console.log(id)
    const oneLess = posts.filter((post) => {
      return post.id !== id;
    });
    // console.log(oneLess)
    setPosts(oneLess);
  }

  function handleDelete() {
    if (user.id === post.user.id) {
      fetch(`http://localhost:9292/posts/${post.id}`, {
        method: "DELETE",
      });
      onDelete(post.id);
    } else {
      alert("You can't do that");
    }
  }

  const handleClick = () => {
    setEdit(!edit);
  };

  const ShowEdit = () => {
    const [editImage, setEditImage] = useState(post.image);
    const [editBody, setEditBody] = useState(post.body);
    const editBodyChange = (e) => {
      setEditBody(e.target.value);
    };
    const editImageChange = (e) => {
      setEditImage(e.target.value);
    };
    const handleEdit = () => {
      const editObj = { body: editBody, image: editImage };
      const configObject = {
        method: "PATCH",
        headers: {
          "content-type": "application/JSON",
        },
        body: JSON.stringify(editObj),
      };
      fetch(`http://localhost:9292/posts/${post.id}`, configObject)
        .then((r) => r.json())
        .then((updatedPost) => {
          console.log(updatedPost);
          setPosts(
            posts.map((post) => {
              if (updatedPost.id === post.id) {
                return updatedPost;
              } else return post;
            })
          );
          setEdit(!edit);
        });
    };
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 430 }}>
          <Form size="large" onSubmit={handleEdit} className="edit-post">
            <Form.Input
              icon="globe"
              iconPosition="left"
              placeholder="Insert Image URL Here"
              onChange={editImageChange}
              value={editImage}
              required
            />
            <Form.Input
              icon="comment"
              iconPosition="left"
              placeholder="What would you like to tell the world today"
              onChange={editBodyChange}
              value={editBody}
              required
            />
            <Button className="edit-button" fluid size="large">
              Edit Post
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  };

  const handleLike = () => {
    console.log("liked");
    const likeObj = { likes: (post.likes += 1) };
    const configObject = {
      method: "PATCH",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(likeObj),
    };
    fetch(`http://localhost:9292/posts/${post.id}`, configObject)
      .then((r) => r.json())
      .then((likes) => {
        console.log(likes);
        setLikes(likes);
      });
  };
  const handleDislike = () => {
    console.log("disliked");
    const dislikeObj = { dislikes: (post.dislikes += 1) };
    const configObject = {
      method: "PATCH",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(dislikeObj),
    };
    fetch(`http://localhost:9292/posts/${post.id}`, configObject)
      .then((r) => r.json())
      .then((dislikes) => {
        console.log(dislikes);
        setDislikes(dislikes);
      });
  };

  return (
    <div key={post.id}>
      <div className="post-card">
        <div className="post-banner">
          <div>
            <button className="edit-btn" onClick={handleClick}>
              Edit
            </button>
          </div>
          <div className="delete-post-btn">
            <span onClick={handleDelete}>⊗</span>
          </div>
        </div>
        {edit && <ShowEdit />}
        <img className="comment-image" src={post.image} alt={post.body} />
        <div>
          <span class="zoom-box" onClick={handleLike}>
            👍
          </span>
          <span className="like-text">{post.likes} </span>
          <span class="zoom-box" onClick={handleDislike}>
            👎
          </span>
          <span className="like-text">{post.dislikes}</span>
        </div>
        <div className="post-user">
          <img
            id="post-user-img"
            src={post.user.profile_img}
            alt={post.user.username}
          />
          <h4>{post.user.username}</h4>
        </div>
        <dl>
          <dt>
            <strong>{post.body}</strong>
          </dt>
          <span>{mappedComments}</span>
        </dl>
      </div>
    </div>
  );
}

export default ProfilePosts;
