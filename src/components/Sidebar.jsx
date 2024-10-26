import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    
    return (
        <div  className='w-[21%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
            <div className="bg-[#121212] h-[100%] rounded">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className='w-8' src={assets.stack_icon} alt="" srcset="" />
                        <p className="font-semibold">Your Library</p>

                    </div>
                    <div className="flex items-center gap-3">
                        <img src={assets.arrow_icon} alt="" className="w-5" />
                        <img src={assets.plus_icon} alt="" className="w-5" />
                    </div>

                </div>
                <div className="p-4  bg-[#242424]  m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1 className="g">Create your first playlist</h1>
                    <p className=' font-light'>it's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
                </div>
                <div className="p-4  bg-[#242424]  m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
                    <h1 className="g">let's findsome podcasts to follow</h1>
                    <p className=' font-light'>we'll keep you update on new episode</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
