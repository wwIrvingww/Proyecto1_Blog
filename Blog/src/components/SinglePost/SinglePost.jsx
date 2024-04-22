import './singlePost.css'
import { useEffect, useState } from 'react'

export default function SinglePost({ postId }) {
    const [post, setPost] = useState(null)
    
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3001/blogs/${postId}`)
                const postData = await response.json()
                console.log('Post Data:', postData); 
                setPost(postData)
            } catch (error) {
                console.error('Error fetching post:', error)
            }
        }
        fetchPost()
    }, [postId])

    if (!post) {
        return <h1>Loading...</h1>
    }

    return(   
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={post[0].image64} 
                alt="" 
                className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    {post[0].title} 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Autor: <b>IRVS</b> </span>
                    <span className='singlePostDate'>Date: {post[0].date} </span> 
                </div>
                <p className='singlePostDesc'>{post[0].content}</p> 
            </div>
        </div>
    )
}
