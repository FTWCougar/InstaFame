import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/posts")
      .then((r) => r.json())
      .then((postArray) => {
        setPosts(postArray);
      });
  }, []);
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const mappedPosts = posts.map((post) => {
    const mappedComments = post.comments.map((comment) => {
      return <li key={comment.id}>{comment.body}</li>;
    });
    return (
      <>
        <div key={post.id} className="posts">
          <h3>{post.user.username}</h3>
          <p>{post.body}</p>
          <ul>{mappedComments}</ul>
          <form>
            <label>Leave a comment: </label>
            <input value={comment} onChange={handleCommentChange} />
            <button>Comment</button>
          </form>
        </div>
      </>
    );
  });

  return <div>{mappedPosts}</div>;
}

export default Posts;
