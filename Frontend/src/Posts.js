import Post from "./Post"

function Posts({users, posts, user, setPosts }) {

  const mappedPosts = posts.map((post) => {

    return (
      <Post users={users} posts={posts} setPosts={setPosts} key={post.id} user={user} post={post}/>
    )
  });

  return <div>{mappedPosts}</div>;
}

export default Posts;
