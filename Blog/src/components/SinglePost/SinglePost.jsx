import './singlePost.css'
import { useEffect, useState } from 'react'

export default function SinglePost({ postId }) {
    //CREAR POST EN SINGLE
    const [post, setPost] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [editedTitle, setEditedTitle] = useState('')
    const [editedContent, setEditedContent] = useState('')
    const [editedImage64, setEditedImage64] = useState('')
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3001/blogs/${postId}`)
                const postData = await response.json()
                console.log('Post Data:', postData); 
              setPost(postData)
                setEditedTitle(postData[0].title)
                setEditedContent(postData[0].content)
            } catch (error) {
                console.error('Error fetching post:', error)
            }
        }
        fetchPost()
    }, [postId])

    if (!post) {
        return <h1>Loading...</h1>
    }

    //PARA ELIMINAR POST 
    const handleItemClick = (route) => {
        onRouteChange(route)
    }
    const deletePost = async (id, onRouteChange) => {
        let response = await fetch(`http://127.0.0.1:3001/blogs/${postId}`,
        {
            method: 'DELETE',
        }
    );
    if (response.status === 200){
        console.log('Post deleted successfully');
        
    } else {
        return
        console.log('error to delete post')
    }
    }

    const editPost = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:3001/blogs/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: editedTitle,
                    content: editedContent,
                    image64: editedImage64
                }),
            });
            const updatedPostData = await response.json();
            console.log('Updated Post Data:', updatedPostData);
            setPost(updatedPostData);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    if (!post) {
        return <h1>Loading...</h1>;
    }

    return(   
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={post[0].image64} 
                alt="" 
                className="singlePostImg"
                />
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="singlePostTitleInput"
                        />
                        <textarea
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            className="singlePostDescInput"
                        />
                        <textarea
                            value={editedImage64}
                            onChange={(e) => setEditedImage64(e.target.value)}
                            className="singlePostImageInput"
                        />

                        <button onClick={editPost} className="singlePostButton">Submit</button>
                    </>
                ) : (
                    <>
                        <h1 className="singlePostTitle">
                            {post[0].title} 
                            <div className="singlePostEdit">
                                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setIsEditing(true)}></i>
                                <i className="singlePostIcon fa-regular fa-trash-can" onClick={() => deletePost(postId) }></i> 
                            </div>
                        </h1>
                        <div className="singlePostInfo">
                            <span className='singlePostAuthor'>Autor: <b>IRVS</b> </span>
                            <span className='singlePostDate'>Date: {post[0].date} </span> 
                        </div>
                        <p className='singlePostDesc'>{post[0].content}</p> 
                    </>
                )}
            </div>
        </div>
    )
}