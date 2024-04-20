import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import TopBar from '../../components/TopBar/TopBar';
import './single.css';



export default function Single() {
    
    return(  
        <>
            <TopBar/>
            <div className="single">         
                <SinglePost/>
                <Sidebar/>   
            </div>
        </> 
    )
}