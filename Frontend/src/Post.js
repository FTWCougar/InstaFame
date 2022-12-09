import { useState } from "react";
import { Form, Button, Grid } from "semantic-ui-react";

const Post = ({ users, post, user, posts, setPosts }) => {
  const [comment, setComment] = useState("");
  const [edit, setEdit] = useState(false);
  // const [updatedPost, setUpdatedPost] = useState({})
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
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

  // function handleDelete() {
  //   if (user.id === post.user.id) {
  //     fetch(`http://localhost:9292/posts/${post.id}`, {
  //       method: "DELETE",
  //     });
  //     onDelete(post.id);
  //   } else {
  //     alert("You can't do that");
  //   }
  // }
  // const handleClick = () => {
  //   setEdit(!edit);
  // };

  const handleLike = () => {
    console.log("liked");
    const likeObj = {likes: post.likes += 1}
    const configObject = {
      method: "PATCH",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(likeObj),
    };
    fetch(`http://localhost:9292/posts/${post.id}`, configObject)
    .then(r => r.json())
    .then(likes => {
      console.log(likes)
      setLikes(likes)
    })
  };
  const handleDislike = () => {
    console.log("disliked");
    const dislikeObj = {dislikes: post.dislikes += 1}
    const configObject = {
      method: "PATCH",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(dislikeObj),
    };
    fetch(`http://localhost:9292/posts/${post.id}`, configObject)
    .then(r => r.json())
    .then(dislikes => {
      console.log(dislikes)
      setDislikes(dislikes)
    })
  };

  // const ShowEdit = () => {
  //   const [editImage, setEditImage] = useState(post.image);
  //   const [editBody, setEditBody] = useState(post.body);
  //   const editBodyChange = (e) => {
  //     setEditBody(e.target.value);
  //   };
  //   const editImageChange = (e) => {
  //     setEditImage(e.target.value);
  //   };
  //   const handleEdit = () => {
  //     const editObj = {body: editBody, image: editImage}
  //     const configObject = {
  //       method: "PATCH",
  //       headers: {
  //         "content-type": "application/JSON",
  //       },
  //       body: JSON.stringify(editObj),
  //     };
  //     fetch(`http://localhost:9292/posts/${post.id}`, configObject)
  //     .then(r => r.json())
  //     .then(updatedPost => {
  //       console.log(updatedPost)
  //       setPosts(
  //         posts.map((post) => {
  //           if (updatedPost.id === post.id) {
  //             return updatedPost;
  //           } else return post;
  //         })
  //       );
  //       setEdit(!edit);
  //     })
  //   };
  //   return (
  //     <Grid textAlign="center" verticalAlign="middle" className="post-input">
  //       <Grid.Column style={{ maxWidth: 430 }}>
  //         <Form size="large" onSubmit={handleEdit}>
  //           <Form.Input

  //             icon="globe"
  //             iconPosition="left"
  //             placeholder="Insert Image URL Here"
  //             onChange={editImageChange}
  //             value={editImage}
  //             required
  //           />
  //           <Form.Input

  //             icon="comment"
  //             iconPosition="left"
  //             placeholder="What would you like to tell the world today"
  //             onChange={editBodyChange}
  //             value={editBody}
  //             required
  //           />
  //           <Button className="post-button" fluid size="large">
  //             Edit Post
  //           </Button>
  //         </Form>
  //       </Grid.Column>
  //     </Grid>
  //   );
  // };

  return (
    <div key={post.id}>
      <div className="post-card">
        {/* <div className="delete-post-btn">
          <span onClick={handleDelete}>⊗</span>
        </div> */}
        {/* <div>
          <button onClick={handleClick}>Edit</button>
        </div>
        <ShowEdit/>
        {edit && <ShowEdit />} */}
        <br />
        <div key={post.id} className="posts">
          <img
            className="comment-image"
            src={post.image}
            alt={post.user.username}
          />
          <p>
            <span onClick={handleLike}>👍</span> {post.likes}{" "}
            <span onClick={handleDislike}>👎</span> {post.dislikes}
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
