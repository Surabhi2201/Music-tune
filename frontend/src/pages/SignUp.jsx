import { useState } from "react"
import { ActivityHeading } from "../components/ActivityHeading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox";
import { ButtonElement } from "../components/ButtonElement";
import { BottomMessage } from "../components/BottomMessage";
import axios from "axios";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
export function SignUp(){
    const [firstName , setFirstName]= useState("");
    const [lastName , setLastName]= useState("");
    const [email , setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();
    const landPage = "/images/image.png"
       return <div className=" flex justify-center pt-10 bg-gradient-to-r from-cyan-500 to-blue-500  h-screen  w-full" style={{backgroundImage: `url(${landPage})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
       
        <div className=" flex-col h-3/4  justify-center items-center bg-lime-600  p-4 rounded-lg" >
           <ActivityHeading title="Sign-Up"/>
           <SubHeading message="Enter your crendentials to sign up in your account"/>
            <InputBox title="First Name" placeholder="Jack" onChange={(e)=>{
              setFirstName(e.target.value)
            }}/>
            <InputBox title="Last Name" placeholder="Jones" onChange={(e)=>{
              setLastName(e.target.value)
            }}/>
            <InputBox title="Email" placeholder="jack12@gmail.com" onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
            <InputBox title="Password" placeholder="Jack@22" onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
            <ButtonElement label="SignUp" onClick={async ()=>{
              const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                username: email,
                firstName:firstName,
                lastName:lastName,
                password: password
              }).then(res=>{
                alert("Created Successfully")
              })
              navigate("/dashboard");
            
              localStorage.setItem("token", response.data.token);
            }}/>
            <BottomMessage message="Already have account" to="/signin" label="Login"/>
        </div>
    </div>
}