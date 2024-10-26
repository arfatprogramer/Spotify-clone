import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

const Player = () => {
    const {SeekBarRef,SeekBgRef} =useContext(PlayerContext)
    const {playStatus,track,songTime,play,pause}=useContext(PlayerContext);
    const {presong,nextsong,seekSong}=useContext(PlayerContext);
    return (
        <div className='h-[10] bg-black flex justify-between items-center text-white px-4'>
            <div className="hidden lg:flex items-center gap-4">
                <img src={track.image} className="w-12" />
                <div className="">
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img onClick={nextsong} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    {playStatus?
                    <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />:
                    <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
}
                    <img onClick={nextsong} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />

                </div>
                <div className="flex items-center gap-5">
                    <p>{songTime.currentTime.min}:{songTime.currentTime.second}</p>
                    <div ref={SeekBgRef} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer ">
                        <hr ref={SeekBarRef} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{songTime.totalTime.min}:{songTime.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center  gap-2 opacity-75">
                <img className='w-4' src={assets.plays_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className="w-20 bg-slate-50 h-1 rounded"></div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />

            </div>
        </div>
    )
}

export default Player