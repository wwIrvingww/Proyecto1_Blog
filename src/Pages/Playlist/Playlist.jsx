import React from 'react'
import './playlist.css'

export default function Playlist () {
  return (
        <div className="container">
            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/1QpX6NyBnbTTSuYqyw47yg?utm_source=generator&theme=0"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
        </div>
  )
}
