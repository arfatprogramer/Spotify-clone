import { useContext, useState } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import {PlayerContext} from './Context/PlayerContext'
import Topbar from './components/Topbar'


function App() {
  const {songref,track} = useContext(PlayerContext)
  return (
    <div  className='h-screen bg-black'>
        <Topbar/>
      <div className="h-[82%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player/>
      <audio ref={songref} src={track.file} preload='auto'></audio>
     
    </div>
  )
}

export default App
