import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();
 
const PlayerContextProvider=(props)=>{
    const songref = useRef();
    const SeekBgRef = useRef();
    const SeekBarRef = useRef();

    const [track,setTrack]=useState(songsData[0]);
    const [FormInput, setFormInput] = useState('');
    
    const [playStatus,setPlayStatus]=useState(false);
    const [songTime,setSongTime]=useState({
        currentTime:{
            second:0,
            min:0
        },
        totalTime:{
            second:0,
            min:0
        }
    });

    const play=()=>{
        songref.current.play();
        setPlayStatus(true);
    }
    const pause=()=>{
        songref.current.pause();
        setPlayStatus(false);
    }   
    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await songref.current.play(); 
        setPlayStatus(true);
    }

    const presong = async ()=>{
        if(track.id > 0){
            await setTrack(songsData[track.id - 1]);
            await songref.current.play();
            setPlayStatus(true);
        }
    }

    const nextsong = async ()=>{
        if(track.id <songsData.length-1){
            await setTrack(songsData[track.id + 1]);
            await songref.current.play();
            setPlayStatus(true);
        }
    }

    const seekSong = async (e)=>{
       songref.current.currentTime=((e.nativeEvent.offsetX / SeekBgRef.current.offsetWidth) * songref.current.duration)
       play();
        
    }
    

    useEffect(()=>{
        setTimeout(() => {
            songref.current.ontimeupdate=()=>{
                SeekBarRef.current.style.width=(Math.floor(songref.current.currentTime /songref.current.duration*100 ))+"%";
                setSongTime({
                    currentTime:{
                        second : Math.floor(songref.current.currentTime % 60),
                        min : Math.floor(songref.current.currentTime / 60)
                    },
                    totalTime:{
                        second : Math.floor(songref.current.duration % 60),
                        min : Math.floor(songref.current.duration / 60)
                    }
                })   
            }   
        }, 1000);
    },[songref])
    

    const contexValue={
        songref,
        SeekBgRef,
        SeekBarRef,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        songTime,setSongTime,
        play,pause,
        playWithId,
        presong,
        nextsong,
        seekSong,
        FormInput,setFormInput,

    }
       return(
        <PlayerContext.Provider value={contexValue}>
            {props.children}
        </PlayerContext.Provider>
       )

    
}
export default PlayerContextProvider;