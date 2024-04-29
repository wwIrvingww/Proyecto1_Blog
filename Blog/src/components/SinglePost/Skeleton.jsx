import React from 'react'
import './skeleton.css'

const Skeleton = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostTitle">
          <div className="skeleton-img"></div>
          <span className="title-skeleton"></span>
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </div>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Autor: <b>IRVS</b> </span>
          <span className="singlePostDate">Date: </span>
        </div>
        <p className="singlePostDesc">
          <span className="content-skeleton"></span>
          <span className="content-skeleton"></span>
          <span className="content-skeleton"></span>
        </p>
      </div>
    </div>
  )
}

export default Skeleton
