import { useContext, useState } from "react";
import { FooterMusic } from "./FooterMusic";
import { MusicPlayer } from "./MusicPlayer";
import { Link } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const audio = new Audio();
export function SongCard1({songName, movie , id }){
  const {playWithId} = useContext(PlayerContext);
  const [showPlayer, setShowPlayer] = useState(false);
  const movieSrc = movie
  function playbtnclick(){
    setShowPlayer(true)
  }
  return <div onClick={()=>playWithId(id)} className="text-center text-gray-200 p-2 w-60 h-60 bg-transparent rounded-lg">
    
    <img src={movieSrc} className="h-2/3 w-3/4 pl-5 ml-5 rounded-lg"></img>
    <div className="flex justify-center items-center">
    <p>{songName}</p>
   <div className="relative-group">
   <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
<div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm rounded py-2 px-3">
          This is a notification icon
        </div>
   </div>
   
    </div>

    
  
  </div>
}

