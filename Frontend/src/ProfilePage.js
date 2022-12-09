import ProfilePosts from "./ProfilePosts";

function ProfilePage({ user, posts, users, setPosts }) {
  
  const filteredPosts = posts.filter((post) => {
    return post.user.id === user.id;
  });

  const mappedPosts = posts.map((post) => {
    if (post.user.id === user.id) {
      return (
        <ProfilePosts
          key={post.id}
          posts={posts}
          post={post}
          user={user}
          setPosts={setPosts}
          users={users}
        />
      );
    }
  });

  return (
    <div>
      <div className="view-profile">
        <img
          className="profile-img"
          src={user.profile_img}
          alt={user.username}
        />
        <div className="profile-details">
          <h4>
            Your name: {user.first_name} {user.last_name}
          </h4>
          <h4>Your username: {user.username}</h4>
          <span>
            <em>{filteredPosts.length} posts</em>
          </span>
        </div>
      </div>
      <div>{mappedPosts}</div>
    </div>
  );
}

export default ProfilePage;
