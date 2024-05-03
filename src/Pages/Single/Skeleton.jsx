import React from 'react'
import './skeleton.css'

const Skeleton = () => {
  return (
    <div className="single">
      <div className="singlePost">
        <div className="singlePostWrapper">
          <div className="singlePostHeader">
            <h1 className="singlePostTitle">
              <span className="title-skeleton"></span>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                <span className="author-skeleton"></span>
              </span>
              <span className="singlePostDate">
                <span className="date-skeleton"></span>
              </span>
            </div>
          </div>
          <div className="singlePostImg">
            <img
              src="data:image/png;base64,iVBORw0KGg...."
              alt=""
              className="singlePostImage"
            />
          </div>
          <div className="singlePostText">
            <p className="postContentItem">
              <span className="content-skeleton"></span>
            </p>
            <p className="postContentItem">
              <span className="content-skeleton"></span>
            </p>
            <p className="postContentItem">
              <span className="content-skeleton"></span>
            </p>
            <p className="postContentItem">
              <span className="content-skeleton"></span>
            </p>
          </div>
          <div className="singlePostAuthor">
            <div className="singlePostAuthorInfo">
              <img
                src="data:image/png;base64,iVBORw0KGg...."
                alt=""
                className="singlePostAuthorImg"
              />
              <span className="singlePostAuthorName">
                <span className="author-name-skeleton"></span>
              </span>
            </div>
            <span className="singlePostFollowText">
              <span className="follow-text-skeleton"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
