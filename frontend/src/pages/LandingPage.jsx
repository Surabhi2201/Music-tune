import { useRef, useState } from "react"
import {  SongCard1} from "../components/SongCard"
import { Heading } from "../components/Heading"
import { MainPageMessage } from "../components/MainPageMessage"



export function LandingPage(){
       const landPage = "/images/image.png"
       return <div className="bg-gradient-to-r from-cyan-500 to-blue-500  h-screen  w-full" style={{backgroundImage: `url(${landPage})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
       
        <div className=" h-1/2 justify-center" >
        
        <Heading title="D-Tunes"/>
        <MainPageMessage/>
        </div>
    </div>
}