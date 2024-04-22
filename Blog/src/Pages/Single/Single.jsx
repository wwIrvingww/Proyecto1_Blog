import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import TopBar from '../../components/TopBar/TopBar';
import './single.css';

export default function Single() {
    // Obtiene la URL actual
    const currentUrl = window.location.href;
    // Utiliza una expresión regular para buscar el postId en la URL
    const postIdMatch = currentUrl.match(/\/single\/(\d+)/);
    // Si se encuentra una coincidencia, toma el postId, de lo contrario, es null
    const postId = 4

    return(  
        <>
           
            <div className="single">         
                <SinglePost postId={postId} /> {/* Paso del postId como prop */}
                <Sidebar />   
            </div>
        </> 
    )
}
