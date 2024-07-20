import { MusicPlayer } from "../components/MusicPlayer";

export function MainMusicPlayer({songName}){
  return <div>
    <MusicPlayer songName={songName}/>
  </div>
}