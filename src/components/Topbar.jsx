import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../Context/PlayerContext';

const Topbar = () => {
  const navigate =useNavigate();
  const login =useNavigate();
  const Signup =useNavigate();
  const {FormInput,setFormInput} =useContext(PlayerContext);
  const searchRef= useRef();
  const formSubmit=(e)=>{
    e.preventDefault();
    alert("You are searching for :- "+FormInput);
    
    
  }
  
  return (
    <div className='h-[8%] hidden lg:flex justify-between items-center text-white px-7 '>
      <div  className="w-[230px] flex justify-start items-center">
      <img onClick={()=>navigate('/')} className='w-12 cursor-pointer hover:w-[50px]' src={assets.black_logo}  />
      </div>

      <div className="flex justify-center items-center pt-2 gap-3">
        <img onClick={()=>navigate('/')} className='w-10 h-10 p-2 rounded-full bg-[#212121] hover:scale-[1.08]' src={assets.home_icon} alt="" />
        <div ref={searchRef} className="flex items-center  border-2 border-gray-500  bg-[#212121] rounded-full px-2">
          <img className='w-6 h-6 cursor-pointer' src={assets.search_icon} alt="" />
          <form onSubmit={formSubmit}><input onFocus={()=>{searchRef.current.style.border="2px solid #fff"}} onBlur={()=>{searchRef.current.style.border="2px solid #212121"}} onChange={(e)=>setFormInput(e.target.value)} value={FormInput} type="text" placeholder="what do you want to hear ?" className="bg-transparent w-[400px] p-2 outline-none"/> 
          <button className='border-l pl-2' type='submit'>Search</button>
          </form>
          <button></button>
        </div>
      </div>
      <div className="flex items-center pt-2 gap-3">
        <button onClick={()=>login('/signup')} className='rounded-full p-3 bg-black font-bold  px-7 cursor-pointer hover:scale-[1.08] '>Sign up</button>
        <button onClick={()=>Signup('/login')} className='rounded-full p-3 bg-white text-black font-bold px-7 hover:scale-[1.08] cursor-pointer '>Log in</button>
      </div>

    </div>
  )
}

export default Topbar
