// import React, { useState } from 'react'
import "./Songs.css"

const MoodSongs = ({Songs}) => {

  
  return (
    <div className="mood-songs">
        <h2>Recomanend songs</h2>

        {Songs.map((song,index)=>(
         <div key={index} className='wrap'>
            <div className="title">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
            </div>
            <div className="song">
               <audio src={song.audio} controls></audio>
                <i className="ri-pause-line"></i>
                <i className="ri-play-circle-fill"></i>
            </div>
         </div>
        ))}
    </div>
  )
}

export default MoodSongs