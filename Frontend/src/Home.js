import Posts from "./Posts";

function Home({ posts, user , setPosts}) {
  return (
    <div>
      <Posts posts={posts} user={user}/>
    </div>
  );
}

export default Home;
