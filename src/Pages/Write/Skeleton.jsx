import React from 'react'
import './skeleton.css'

const Skeleton = () => {
  return (
    <div className="write">
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            value=""
            disabled={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Content"
            type="text"
            className="writeInput writeText"
            value=""
            disabled={true}
          ></textarea>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder='URL de la imagen'
            value=""
            type="text"
            style={{ width: '100%', height: '5vh' }}
            disabled={true}
            className="writeText">
          </textarea>
        </div>
        <button className="writeSubmit" type="submit" disabled={true}>
          Publish
        </button>
      </form>
    </div>
  )
}

export default Skeleton
