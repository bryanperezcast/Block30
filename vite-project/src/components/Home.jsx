import './Home.css'
import NavBar from './Navbar'
import { useEffect, useState } from 'react'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function renderAllPosts() {
            try {
                const response = await fetch(`https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-b/posts`)
                const result = await response.json()
                setPosts(result.data.posts);
            } catch (err) {
                console.error(err)
            }
        }
        renderAllPosts();
    }, [])

    return (
        <div>
            <NavBar />
            <div className='main'> 
                <div className='container'>
                    <div className='row'>
                        {
                            posts.map((post) => {
                                return (
                                    <div key={post._id} className='itemCard'>
                                        <ul>{post.title}</ul>
                                        <h3>${post.price}</h3>
                                        <h3>Location: {post.location}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Home