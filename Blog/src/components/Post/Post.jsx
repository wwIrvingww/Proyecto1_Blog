import './post.css'

export default function Post ({ image, title, description, date, id, navigate }) {
  const handleClick = () => {
    navigate(`/single/${id}`)
  }

  return (
    <div className='post' onClick={handleClick}>
      <img className='postImg' src={image} alt="" />
      <div className="postInfo">
        <span className="postTitle">{title}</span>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className='postDesc'>{description}</p>
    </div>
  )
}
