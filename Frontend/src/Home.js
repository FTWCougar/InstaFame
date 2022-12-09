import Posts from "./Posts";
import CreatePost from "./CreatePost";
import ProfilePage from "./ProfilePage";
import { useState } from "react";

function Home({ users, posts, user, setPosts }) {
  const [showProfile, setShowProfile] = useState(false);

  function handleProfile() {
    setShowProfile(!showProfile);
  }

  return (
    <div>
      <button onClick={handleProfile}>
        {showProfile ? "Back to Home" : "View Profile"}
      </button>

      {showProfile ? (
        <ProfilePage users={users} posts={posts} setPosts={setPosts} user={user} />
      ) : (
        <div>
          <CreatePost user={user} setPosts={setPosts} posts={posts} />{" "}
          <Posts users={users} setPosts={setPosts} posts={posts} user={user} />
        </div>
      )}
    </div>
  );
}

export default Home;
