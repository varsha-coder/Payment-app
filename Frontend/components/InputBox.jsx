

export function InputBox({label,placeholder,onChange}){
    return <div>
        <div className=" pt-2 pb-1 pl-10 text-left text-md font-semibold text-black">{label}</div>
        <div><input onChange={onChange}  placeholder={placeholder} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/></div>
 
    </div>

}