import { useState } from "react";
import { BottomWar } from "../components/BottomWar";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    return <div className="flex justify-center h-screen items-center">
     
        <div className="bg-slate-300 h-screen w-full flex justify-center">
            <div className="flex flex-col justify-center items-center">
                <div className="bg-white w-80 h-max rounded-lg p-2 text-center px-4">
                    <Heading label="Signin"></Heading>
                    <SubHeading label="Enter your credentials to access your account"></SubHeading>
                    <InputBox onChange={(e)=>{
                     setEmail(e.target.value)
                    }} placeholder="Email" label="Email" ></InputBox>
                    <InputBox  onChange={
                        (e)=>{
                            setPassword(e.target.value)
                        }
                    }
                        placeholder="Password"label="Password"></InputBox>
                    <Button label="Sign In" color="black"></Button>
                    <BottomWar label="Don't have an account? " buttonText={"Sign up"}></BottomWar>
                </div>

            </div>

        </div>


    </div>

}


