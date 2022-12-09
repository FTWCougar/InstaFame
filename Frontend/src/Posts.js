import Post from "./Post"
// import {useState} from "react"

function Posts({users, posts, user, setPosts }) {
  // const [newPosts, setNewPosts] = useState([])



  const mappedPosts = posts.map((post) => {

    return (
      <Post users={users} posts={posts} setPosts={setPosts} key={post.id} user={user} post={post} />
    )
  });

  return <div>{mappedPosts}</div>;
}

export default Posts;
