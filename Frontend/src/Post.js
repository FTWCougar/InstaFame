import { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const Post = ({post, user, updatePost}) => {
    const [comment, setComment] = useState("");
    // const [comments, setComments] = useState([])
  
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault()

        const commentObj = {body: comment, post_id: post.id, user_id: user.id}
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
                post.comments.push(commentReturn)
                console.log(commentReturn)
                updatePost(commentReturn)
            });

    }

    const mappedComments = post.comments.map((comment) => {
        return (
          <li key={comment.id}>
            {comment.body} - {}
          </li>
        );
      });
      return (
        <div key={post.id}>
          <div className="post-card">
            <div key={post.id} className="posts">
              <img
                className="comment-image"
                src={post.image}
                alt={post.user.username}
              />
              <p><span>👍</span> {post.likes} <span>👎</span> {post.dislikes}</p>
              <h5>{post.user.username}</h5>
              <p>{post.body}</p>
              <ul>{mappedComments}</ul>
              <Form onSubmit={handleSubmit} className="comment-form">
                <input
                  className="comment-input"
                  // icon="comment"
                  // iconPosition="left"
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
}
export default Post