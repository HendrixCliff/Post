import  React  from "react"
import{ useState, useEffect } from 'react'
import './App.css'

function App() {
   const [posts, setPosts] = useState({}) 

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?limit=5')
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
    .catch(error => {
      console.log(error)
    })
    return(() => {
      console.log("clean-up")
    })
   },[])

      
  return (
    <>
        {posts.map((post) => (
        <div className="poster"
          key={post.id}
        >
          {post.title}
        </div>
      ))}
    </>
  )
}

export default App
