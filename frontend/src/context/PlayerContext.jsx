import { useRef,createContext, useState, useEffect } from "react";
import songDB from "../pages/songs/songs";

export const PlayerContext = createContext();
export function PlayerContextProvider (props){
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar= useRef();

    const [track , setTrack] = useState(songDB[0]);
    const [playStatus,setPlayStatus] = useState(false);
    const [time, setTime]=  useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:1,
            minute:5
        }
    })
    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = ()=>{
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration * 100))+"%"
                setTime(   
                    { currentTime:{
                    second:Math.floor(audioRef.current.currentTime%60),
                    minute:Math.floor(audioRef.current.currentTime/60)
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration%60),
                    minute:Math.floor(audioRef.current.duration/60)
                }})
            }
        },1000)
    },audioRef)

    function play (){
        audioRef.current.play()
        setPlayStatus(true)
    };

    function pause(){
        audioRef.current.pause();
        setPlayStatus(false)
    }

    async function playWithId(id){
        await setTrack(songDB[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    async function previous(){
        if(track.id>0){
           await setTrack(songDB[track.id-1]) ;
           await audioRef.current.play();
           setPlayStatus(true)
        }
    }
    
    async function next(){
        if(track.id<songDB.length){
           await setTrack(songDB[track.id+1]) ;
           await audioRef.current.play();
           setPlayStatus(true)
        }
    }
    async function seekSong(e){
          audioRef.current.currentTime = ((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration);

    }

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,playWithId,
        previous,next,
        seekSong
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;