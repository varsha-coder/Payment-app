import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";

export function SendMoney() {
    return <div className="bg-slate-200 h-screen w-4/4 flex justify-center items-center">

        <div className=" flex flex-col bg-white w-80 h-max p-6 rounded-lg flex justify-center items-center">
            <div className="text-2xl font-bold pb-6">Send Money</div>
            <Avatar label="N" username="varsha"></Avatar>
            <div className=" text-left text-xs  mr-24 pt-1 pb-2 font-semibold text-black">

                Amount (in Rs)
            </div>
            <input className="border border-gray-300 rounded-md w-full  px-16  py-3 focus:outline-none focus:border-blue-500" />
            <Button label="Iniate Transfer" color="blue"></Button>
        </div>
    </div>
}

