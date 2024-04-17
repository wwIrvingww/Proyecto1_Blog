import './singlePost.css'

export default function SinglePost() {
    return(   
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://lasdeliciasdevivir.net/wp-content/uploads/2019/02/Brownies-Red-Velvet-Receta-Las-Delicias-Del-Buen-Vivir.jpg" 
                alt="" 
                className="singlePostImg"
                />
            <h1 className="singlePostTitle">
                Lorem, ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Autor: <b>Irvs</b> </span>
                    <span className='singlePostDate'>Date: 1 hour ago </span>
                </div>
                <p className='singlePostDesc'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Minima ab, exercitationem tenetur labore error nostrum velit, quasi veniam  </p>
            </div>
        </div>
    )
}