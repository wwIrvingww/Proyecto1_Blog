import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Single from '../../Pages/Single/Single';
import Settings from '../../Pages/Settings/Settings';
import Write from '../../Pages/Write/Write';
import { useState, useEffect } from 'react';

function Router({ ruta, navigate }) {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const match = ruta.match(/^\/single\/(\d+)$/);
    if (match) {
      setPostId(match[1]);
    } else {
      setPostId(null);
    }
  }, [ruta]);

  if (postId !== null) {
    return <Single postId={postId} />;
  }

  switch (ruta) {
    case '/':
    case '/home':
      return <Home navigate={navigate} />;
    case '/login':
      return <Login />;
case '/register':
      return <Register />;
    case '/settings':
      return <Settings />;
    case '/write':
      return <Write />;
    default:
      return (
        <div>
          <h1>Ruta actual {ruta}</h1>
        </div>
      );
  }
}

export default Router;