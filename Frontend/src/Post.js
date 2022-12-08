import { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const Post = ({ users, post, user, posts, setPosts, onDelete, newPosts }) => {
  const [comment, setComment] = useState("");
  //   const [commentUser, setCommentUser] = useState('')

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const commentObj = { body: comment, post_id: post.id, user_id: user.id };
    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(commentObj),
    };

    fetch("http://localhost:9292/comments", configObject)
      .then((r) => r.json())
      .then((commentReturn) => {
        console.log(commentReturn);
        setComment("");
        setPosts(
          posts.map((post) => {
            if (commentReturn.post_id === post.id) {
              post.comments.push(commentReturn);
              console.log(post);
              return post;
            } else return post;
          })
        );
      });
  };

  const mappedComments = post.comments.map((comment) => {
    let commentUser = "";
    users.map((user) => {
      if (comment.user_id === user.id) {
        commentUser = user.username;
      }
    });
    return (
      <li key={comment.id}>
        {comment.body} - {commentUser}
      </li>
    );
  });

  function handleDelete() {
    if(user.id === post.user.id){
      fetch(`http://localhost:9292/posts/${post.id}`, {
        method: "DELETE",
      });
      onDelete(post.id);
    }else{
      alert("You can't do that")
    }
  }

  return (
    <div key={post.id}>
      <div className="post-card">
        <div className="delete-post-btn" onClick={handleDelete}>
          <span>⊗</span>
        </div>
        <div key={post.id} className="posts">
          <img
            className="comment-image"
            src={post.image}
            alt={post.user.username}
          />
          <p>
            <span>👍</span> {post.likes} <span>👎</span> {post.dislikes}
          </p>
          <h5>{post.user.username}</h5>
          <p>{post.body}</p>
          <ul>{mappedComments}</ul>
          <Form onSubmit={handleSubmit} className="comment-form">
            <input
              className="comment-input"
              // icon="comment"
              // iconPosition="left"
              name="comment"
              placeholder="Add a comment..."
              onChange={handleCommentChange}
              required
            />
            <Button className="comment-button" fluid size="large">
              Comment
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Post;
