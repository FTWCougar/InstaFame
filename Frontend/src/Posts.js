import { useState } from "react";
import { Form, Button } from "semantic-ui-react";

function Posts({ posts }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const mappedPosts = posts.map((post) => {
    console.log(post.comments);
    const mappedComments = post.comments.map((comment) => {
      return (
        <li key={comment.id}>
          {comment.body} - {comment.user_id}
        </li>
      );
    });
    return (
      <div>
        <div className="post-card">
          <div key={post.id} className="posts">
            <img
              className="comment-image"
              src={post.image}
              alt={post.user.username}
            />
            <h5>{post.user.username}</h5>
            <p>{post.body}</p>
            <ul>{mappedComments}</ul>
            <Form className="comment-form">
              <input
                className="comment-input"
                icon="comment"
                iconPosition="left"
                value={comment}
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
  });

  return <div>{mappedPosts}</div>;
}

export default Posts;
