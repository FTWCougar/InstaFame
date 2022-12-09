import { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const Post = ({ users, post, user, posts, setPosts }) => {
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);

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
        {comment.body} - <em>{commentUser}</em>
      </li>
    );
  });

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
        <br />
        <div key={post.id} className="posts">
          <img
            className="comment-image"
            src={post.image}
            alt={post.user.username}
          />
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
            <dt>{mappedComments}</dt>
          </dl>
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
