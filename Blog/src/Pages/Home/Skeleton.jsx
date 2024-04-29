import React from 'react'
import './skeleton.css'

const Skeleton = () => {
  return (
    <div className="home">
      <div className="posts-skeleton">
        <div className="post-skeleton">
          <div className="post-header-skeleton">
            <span className="post-title-skeleton"></span>
            <span className="post-author-skeleton"></span>
          </div>
          <div className="post-content-skeleton">
            <span className="post-text-skeleton"></span>
          </div>
        </div>
        <div className="post-skeleton">
          <div className="post-header-skeleton">
            <span className="post-title-skeleton"></span>
            <span className="post-author-skeleton"></span>
          </div>
          <div className="post-content-skeleton">
            <span className="post-text-skeleton"></span>
          </div>
        </div>
        <div className="post-skeleton">
          <div className="post-header-skeleton">
            <span className="post-title-skeleton"></span>
            <span className="post-author-skeleton"></span>
          </div>
          <div className="post-content-skeleton">
            <span className="post-text-skeleton"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
