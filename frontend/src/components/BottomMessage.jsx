import { Link } from "react-router-dom";

export function BottomMessage({message,to, label}){
return <div className="flex justify-center items-center pt-5 text-xl text-slate-100">
    {message}? <Link to={to}> <p className="p-1">{label}</p></Link>
</div>
}