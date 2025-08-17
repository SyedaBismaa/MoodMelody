
import { useState } from 'react'
import './App.css'
import FacialExpression from "./componants/FacialExpression"
import MoodSongs from './componants/Songs'

function App() {

    const [Songs, setSongs] = useState([
      
    ])

  return (
    <>
      <FacialExpression setSongs={setSongs}/>
      <MoodSongs Songs={Songs}/>
    </>
  )
}

export default App
