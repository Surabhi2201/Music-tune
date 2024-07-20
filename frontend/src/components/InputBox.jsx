export function InputBox({title , onChange, placeholder}){
    return   <div className="flex-col items-start p-2.5 text-gray-800  ">
    <p>{title}</p>
    <input  placeholder={placeholder} onChange={onChange} className=" w-11/12 h-9 rounded-lg p-2"></input>
    </div>
}