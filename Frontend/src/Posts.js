

function Posts() {
  fetch('http://localhost:9292/posts')
  .then(r => r.json())
  .then(postArray => {
    console.log(postArray)
  })

  fetch('http://localhost:9292/comments')
  .then(r => r.json())
  .then(commentArray => {
    console.log(commentArray)
  })
  
  return (
    <div>
      
    </div>
  )
}

export default Posts