import './posts.css'
import { useEffect, useState, Suspense, lazy } from 'react'
import Skeleton from './Skeleton'; // Importa tu componente de esqueleto

const Post = lazy(() => import('../Post/Post'));

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
    return <Skeleton />; // Muestra el esqueleto mientras se cargan los datos
  }

  return (
    <Suspense fallback={<Skeleton />}> {/* Mueve el Suspense alrededor del bloque completo de Posts */}
      <div className="posts">
        {postlist.map((post) => (
          <Post
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
            date={post.date}
            id={post.id}
            navigate={navigate}
          />
        ))}
      </div>
    </Suspense>
  );
}
