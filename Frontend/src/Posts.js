import Post from "./Post"
// import {useState} from "react"

function Posts({users, posts, user, setPosts }) {
  // const [newPosts, setNewPosts] = useState([])

  function onDelete(id){
    // console.log(id)
      const oneLess = posts.filter((post) => {
      return post.id !== id
    })
    // console.log(oneLess)
    setPosts(oneLess)
  }

  const mappedPosts = posts.map((post) => {

    return (
      <Post users={users} posts={posts} setPosts={setPosts} key={post.id} user={user} post={post} onDelete={onDelete}/>
    )
  });

  return <div>{mappedPosts}</div>;
}

export default Posts;
