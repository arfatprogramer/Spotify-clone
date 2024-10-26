import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './displayAlbum'
import { albumsData } from '../assets/assets'
import Login from './Login'

const Display = () => {
    const displayRef =useRef()  // to give the refrence to dive
    const location = useLocation() // to get the current location on web page
    const album =location.pathname.includes('album') // checking we are in album or naot
    const id = album ? location.pathname.slice(-1):"" //if we are in albm we will extract id 
    // console.log(id);
    // console.log(albumsData);
    
    const bgcolor = albumsData[Number(id)].bgColor
    // console.log(bgcolor);
    
    
    useEffect(()=>{
        if(album){
            displayRef.current.style.background=`linear-gradient(${bgcolor},#121212)`
            // console.log("hy");
            
        }else{
            displayRef.current.style.background="#121212"
        }
    })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[78%] lg:ml-0'>
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path='/album/:id'element={<DisplayAlbum />} />
        <Route path='/login' element={<Login name='Log in'/>} />
        <Route path='/signup' element={<Login name='Sign Up '/>} />
      </Routes>
    </div>
  )
}

export default Display
