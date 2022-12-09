import { useState } from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import ProfilePosts from "./ProfilePosts"

function ProfilePage({ user, posts, users, setPosts }) {
  // const [comment, setComment] = useState("");
 

  const filteredPosts = posts.filter((post) => {
    return post.user.id === user.id
  })

  const mappedPosts = posts.map((post) => {
    // function onDelete(id){
    //   // console.log(id)
    //     const oneLess = posts.filter((post) => {
    //     return post.id !== id
    //   })
    //   // console.log(oneLess)
    //   setPosts(oneLess)
    // }

    // function handleDelete() {
    //   if (user.id === post.user.id) {
    //     fetch(`http://localhost:9292/posts/${post.id}`, {
    //       method: "DELETE",
    //     });
    //     onDelete(post.id);
    //   } else {
    //     alert("You can't do that");
    //   }
    // }

    // const handleClick = () => {
    //   setEdit(!edit);
    // };

    // const ShowEdit = () => {
    //   const [editImage, setEditImage] = useState(post.image);
    //   const [editBody, setEditBody] = useState(post.body);
    //   const editBodyChange = (e) => {
    //     setEditBody(e.target.value);
    //   };
    //   const editImageChange = (e) => {
    //     setEditImage(e.target.value);
    //   };
    //   const handleEdit = () => {
    //     const editObj = { body: editBody, image: editImage };
    //     const configObject = {
    //       method: "PATCH",
    //       headers: {
    //         "content-type": "application/JSON",
    //       },
    //       body: JSON.stringify(editObj),
    //     };
    //     fetch(`http://localhost:9292/posts/${post.id}`, configObject)
    //       .then((r) => r.json())
    //       .then((updatedPost) => {
    //         console.log(updatedPost);
    //         setPosts(
    //           posts.map((post) => {
    //             if (updatedPost.id === post.id) {
    //               return updatedPost;
    //             } else return post;
    //           })
    //         );
    //         setEdit(!edit);
    //       });
    //   };
    //   return (
    //     <Grid textAlign="center" verticalAlign="middle" className="post-input">
    //       <Grid.Column style={{ maxWidth: 430 }}>
    //         <Form size="large" onSubmit={handleEdit}>
    //           <Form.Input
    //             icon="globe"
    //             iconPosition="left"
    //             placeholder="Insert Image URL Here"
    //             onChange={editImageChange}
    //             value={editImage}
    //             required
    //           />
    //           <Form.Input
    //             icon="comment"
    //             iconPosition="left"
    //             placeholder="What would you like to tell the world today"
    //             onChange={editBodyChange}
    //             value={editBody}
    //             required
    //           />
    //           <Button className="post-button" fluid size="large">
    //             Edit Post
    //           </Button>
    //         </Form>
    //       </Grid.Column>
    //     </Grid>
    //   );
    // };

    if (post.user.id === user.id) {
      // const mappedComments = post.comments.map((comment) => {
      //   let commentUser = "";
      //   users.map((user) => {
      //     if (comment.user_id === user.id) {
      //       commentUser = user.username;
      //     }
      //   });
      //   return (
      //     <li key={comment.id}>
      //       {comment.body} - {commentUser}
      //     </li>
      //   );


        
      // });

      return (
        // <div key={post.id}>
        //   <div className="post-card">
        //     <div className="delete-post-btn">
        //       <span onClick={handleDelete}>⊗</span>
        //     </div>
        //     <div>
        //       <button onClick={handleClick}>Edit</button>
        //     </div>
          
        //   {edit && <ShowEdit />}
        //   <img className="comment-image" src={post.image} alt={post.body} />
        //   <h1>{post.body}</h1>
        //   <p>{mappedComments}</p>
        // </div>
        // </div>
        <ProfilePosts posts={posts} post={post} user={user} setPosts={setPosts} users={users}/>
      );
    }
  });

  return (
    <div>
      <h1>
        Your name: {user.first_name} {user.last_name}
      </h1>
      <h2>Your username: {user.username}</h2>
      <p>{filteredPosts.length} posts</p>
      {mappedPosts}
    </div>
  );
}

export default ProfilePage;
