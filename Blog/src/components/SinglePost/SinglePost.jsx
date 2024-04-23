import './singlePost.css'
import { useEffect, useState } from 'react'

export default function SinglePost({ postId }) {
    const [post, setPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3001/blogs/${postId}`);
                const postData = await response.json();
                console.log('Post Data:', postData); 
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [postId]);

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
                <img src={post[0].image64} alt="" className="singlePostImg" />
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            placeholder="New Title"
                            className="writeInput"
                            autoFocus={true}
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}/>
                        <textarea
                            placeholder="New Content"
                            type="text"
                            className="writeInput writeText"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}>
                        </textarea>
                    </>
                ) : (
                    <>
                        <h1 className="singlePostTitle">
                            {post[0].title} 
                            <div className="singlePostEdit">
                                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setIsEditing(true)}></i>
                                <i className="singlePostIcon fa-regular fa-trash-can" onClick={() => deletePost(postId)}></i> 
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
            {isEditing && (
                <button className="writeSubmit" onClick={editPost}>Save</button>
            )}
        </div>
    );
}
