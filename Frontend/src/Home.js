import Posts from "./Posts";
import CreatePost from "./CreatePost";
import ProfilePage from "./ProfilePage";

function Home({ users, posts, user, setPosts, handleProfile, showProfile }) {
  
  return (
    <div>
      <div className="view-profile-btn">
        <button className="profile-btn" onClick={handleProfile}>
          {showProfile ? "Back to Home" : "View Profile"}
        </button>
      </div>
      {showProfile ? (
        <ProfilePage
          users={users}
          posts={posts}
          setPosts={setPosts}
          user={user}
        />
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
