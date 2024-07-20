
export function ButtonElement({label, onClick}){
return <div className="flex justify-center items-center pt-4">
     <button onClick={onClick} className=" w-1/4  text-white h-10 rounded-lg transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
    {label}
</button>
</div>
}