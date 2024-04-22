import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import TopBar from '../../components/TopBar/TopBar';
import './single.css';

export default function Single({postId}) {
    console.log('postid:', postId)

    return(  
        <>
           
            <div className="single">         
                <SinglePost postId={postId} /> 
                <Sidebar />   
            </div>
        </> 
    )
}
