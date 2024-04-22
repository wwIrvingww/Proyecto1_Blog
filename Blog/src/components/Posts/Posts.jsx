import './posts.css'
import Post from '../Post/Post'
import { useEffect, useState } from 'react'

export default function Posts({ navigate }) {
  const [postlist, setpostlist] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      console.log('Calling API...');
      const response = await fetch('http://127.0.0.1:3001/blogs');
      const body = await response.json();
      console.log(body);
      const newPosts = body.map((b) => {
        return {
          image: b.image64,
          title: b.title,
          description: b.content,
          date: b.date,
          id: b.id,
        };
      });
      setpostlist(newPosts);
    };
    callAPI();
  }, []);

  if (postlist.length === 0) {
    return <h1>loading</h1>;
  }

  return (
    <div className="posts">
      {postlist.map((ytryt) => (
        <Post
          key={ytryt.id}
          image={ytryt.image}
          title={ytryt.title}
          description={ytryt.description}
          date={ytryt.date}
          id={ytryt.id}
          navigate={navigate}
        />
      ))}
    </div>
  );
}