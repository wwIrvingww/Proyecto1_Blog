import TopBar from '../../components/TopBar/TopBar'
import './write.css'

export default function Write() {
    return(
        <>
        <TopBar/>
        <div className='write'>
            <img 
            className="writeImg"
            src="https://lasdeliciasdevivir.net/wp-content/uploads/2019/02/Brownies-Red-Velvet-Receta-Las-Delicias-Del-Buen-Vivir.jpg" 
            alt="" />

            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." 
                    type="text" 
                    className="writeInput writeText"> 
                    </textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
        </>
    )
}