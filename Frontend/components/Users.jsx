import {Button} from "./Button"

export function Users(){
    return <div className="px-9">
       <div className="font-bold">Users</div>
       <div className="pt-2">
       <input className="w-full border border-solid rounded-md px-2 pb-1 pt-1"/>
      
        </div>
        <div   className="flex justify-between">
            <div className="flex justify- start pt-7">
            <div className="h-10 w-10 rounded-full bg-slate-200 flex justify-center items-center">H</div>
            <div className="pt-2 px-3"> Harkirat</div>
            </div>
            <div><Button label="Send Money"></Button></div>
        </div>
    </div>
}