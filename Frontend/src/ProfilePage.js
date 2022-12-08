function ProfilePage({ user, posts, users }) {

    const mappedPosts = posts.map((post) => {
        if (post.user.id === user.id) {

            const mappedComments = post.comments.map((comment) => {
                let commentUser = "";
                users.map((user) => {
                  if (comment.user_id === user.id) {
                    commentUser = user.username;
                  }
                });
                return (
                  <li key={comment.id}>
                    {comment.body} - {commentUser}
                  </li>
                );
              });

            return (
                <div>
                    <img src={post.image} alt={post.body}/>
                    <h1>{post.body}</h1>
                    <p>{mappedComments}</p>
                </div>
            )
        }
    })

    return (
        <div>
            <h1>Welcome, {user.first_name} {user.last_name}</h1>
            <h2>{user.username}</h2>
            <h1>Your posts:</h1>
            <p>{mappedPosts}</p>
        </div>
    )
}

export default ProfilePage;