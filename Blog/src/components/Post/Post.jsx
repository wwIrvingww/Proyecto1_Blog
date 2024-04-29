import React from 'react'
import './post.css'
import PropTypes from 'prop-types'

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

Post.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired
}
