import {useNavigate} from "react-router-dom"

export function MainPageMessage(){
    const navigate = useNavigate()
    return <div>
        <p className="text-white h-1/2 w-1/4 pt-10 text-xl m-10 font-mono">
            Hello people tired from this hectic world sometimes music make us feel relief.
            But some of the app gives unecessary advertisements but in our website you can enjoy music without any interruption. 
            Wanna Enjoy!!
            Then sign up to your account
        </p>
      
        <button className="text-white h-10 w-1/6 bg-slate-800 shadow-md shadow-white rounded-lg" onClick={()=>{
            navigate("/signup")
        }}>
         Sign Up
        </button>
    </div>
}