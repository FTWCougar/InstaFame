import Posts from "./Posts";

function Home({ posts }) {
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}

export default Home;
