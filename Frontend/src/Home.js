import Posts from "./Posts";

function Home({users, posts, user , setPosts}) {
  return (
    <div>
      <Posts users={users} setPosts={setPosts} posts={posts} user={user}/>
    </div>
  );
}

export default Home;
