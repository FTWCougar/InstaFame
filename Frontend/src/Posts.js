import Post from "./Post"

function Posts({ posts, user, setPosts }) {

  const mappedPosts = posts.map((post) => {
    const updatePost = (commentReturn) => {
      if(commentReturn.post_id === post.id){
        console.log(post)


      }
    }
    return (
      <Post updatePost={updatePost} key={post.id} user={user} post={post}/>
    )
  });

  return <div>{mappedPosts}</div>;
}

export default Posts;
