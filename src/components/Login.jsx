import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Login = ({name}) => {
    
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center overflow-auto  text-white bg-[#121212'>
      <div className="flex flex-col justify-center items-center w-[50%] bg-black border py-4 rounded-2xl">
        <div className="flex flex-col justify-center items-center gap-3">
            <img className='w-14' src={assets.black_logo} alt="" />
            <h1 className='font-bold text-4xl py-4'>{name} to Spotify</h1>
            <div className=" w-[330px] flex items-center justify-center gap-3 rounded-full py-3 px-3 border font-bold">continue with Phone Number</div>
            <div className="border w-[100%] my-3"></div>
           <div className="w-[330px] flex flex-col gap-2 mx-auto">
                <label className='items-start' htmlFor="username">Email or username</label>
                <input className='px-4 py-3 bg-transparent border w-[100%]' type="text" placeholder='Email or username' />
                <label htmlFor="password">Password</label>
                <input className='px-4 py-3 bg-transparent border w-[100%]' type="password" placeholder='Password' />
                <button className='px-4 py-3 my-2 font-bold text-black border w-[100%] rounded-full bg-green-600'>Log in</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Login
