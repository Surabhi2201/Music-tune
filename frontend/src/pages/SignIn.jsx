import { useState } from "react"
import { ActivityHeading } from "../components/ActivityHeading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox";
import { ButtonElement } from "../components/ButtonElement";
import { BottomMessage } from "../components/BottomMessage";

export function SignIn(){
  
    const [email , setEmail]= useState("");
    const [fpassword, setPassword]= useState("");
    const landPage = "/images/image.png"
       return <div className=" flex justify-center pt-10 bg-gradient-to-r from-cyan-500 to-blue-500  h-screen  w-full" style={{backgroundImage: `url(${landPage})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
       
        <div className=" flex-col h-3/4  justify-center items-center bg-lime-600  p-4 rounded-lg" >
           <ActivityHeading title="Sign-In"/>
           <SubHeading message="Enter your crendentials to sign in your account"/>
            
            <InputBox title="Email" placeholder="jack12@gmail.com" onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
            <InputBox title="Password" placeholder="Jack@22" onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
            <ButtonElement label="SignIn"/>
            <BottomMessage message="Don't have an account" to="/signup" label="SignIn"/>
        </div>
    </div>
}