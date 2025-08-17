import React, { useState } from 'react'
import "./Songs.css"

const MoodSongs = () => {

    const [Songs, setSongs] = useState([
     {
        title:"test_title",
        artist:"test_artist",
        song:"url"

     },
        {
        title:"test_title",
        artist:"test_artist",
        song:"url"

     },
        {
        title:"test_title",
        artist:"test_artist",
        song:"url"

     }
    ])

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
                <i className="ri-pause-line"></i>
                <i className="ri-play-circle-fill"></i>
            </div>
         </div>
        ))}
    </div>
  )
}

export default MoodSongs