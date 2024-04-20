import './home.css';
import Header from "../../components/Header/Header";
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import TopBar from '../../components/TopBar/TopBar';

export default function Home() {
    return(
    <>  <TopBar/>
        <Header/>
        <div className="home">
            <Posts />
            <Sidebar />
        </div>
     </>
    )
}