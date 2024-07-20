import { useContext } from "react"
import { MusicPlayer } from "../components/MusicPlayer"
import { SideBar } from "../components/SideBar"
import { SongCard1} from "../components/SongCard"
import songDB from "./songs/songs"
import { PlayerContext } from "../context/PlayerContext"
export function DashBoard(){
    const {audioRef , track} = useContext(PlayerContext)
    const landPage = "/images/image.png"
    return  <div className="h-screen space-y-4 space-x-4 gap-4" style={{backgroundImage: `url(${landPage})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        <div className="flex-cols">
          <div className="flex">
          <SideBar/>
        <div className="grid grid-cols-4 gap-4 ">
        {songDB.map((item , index)=>(<SongCard1 key={index} id={item.id} songName={item.songName} movie={item.songImage}/>))}
   
        </div>
          </div>
          <MusicPlayer/>
          <audio ref={audioRef} src={track.songSrc} preload="auto"></audio>
    </div>
   
    </div>
   
}