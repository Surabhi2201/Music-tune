
import { useContext } from 'react'
import songDB from '../pages/songs/songs'
import { PlayerContext } from '../context/PlayerContext'

export function MusicPlayer(){
  const {seekBar , seekBg, playStatus, play,pause,track,time,previous,next,seekSong} = useContext(PlayerContext)
    return <div className="h-1/3 bg-slate-800 flex justify-around items-center text-lime-200 ">
            <div className="hidden lg:flex items-center gap-4">
                <img className='w-12' src={track.songImage} alt="" />
                <div>
                    <p>{track.songName}</p>
                    <p>{track.songArtist}</p>
                </div>
            </div>
             <div>
                <div className='flex'>
                <svg onClick={previous} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
</svg>
{playStatus
?  <svg onClick={pause} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg> : <svg onClick={play} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>}
              

<svg onClick={next} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
</svg>



                </div>
                <div className='flex items-center gap-5'>
                  <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                  <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'></hr>
                  </div>
                  <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
             </div>
        </div>
    
}