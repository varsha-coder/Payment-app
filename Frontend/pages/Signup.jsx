import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWar } from "../components/BottomWar";
import { useState } from "react";
import axios from'axios';
import { Navigate } from "react-router-dom";

export function Signup() {

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  

  async function apiCall(){
    const response =await axios.post("http://localhost:3000/api/v1/user/signup",{
      username:"arsfhuubcd",
      firstName:"ihytrvbjj",
      lastName:"ncarsdguhi@gmail.com",
      password:"gfraghhjk"
    })
     console.log(response);
  }

  apiCall();

  return <div className="flex justify-center items-center h- screen">
    <div className="bg-slate-300 h-screen w-full  flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign up" ></Heading>
          <SubHeading label="Enter your information to create an account"></SubHeading>
          <InputBox onChange={e=>{
           setFirstName( e.target.value);
         
          }} label="First Name" placeholder="First Name" ></InputBox>
          <InputBox onChange={e=>{
            setLastName(e.target.value);
           
          }}
           label="Last Name" placeholder="Last Name"></InputBox>
          <InputBox  onChange={e=>{
            setUsername(e.target.value);
            
          }}
          label="Email" placeholder="Email"></InputBox>
          <InputBox   onChange={e=>{
            setPassword(e.target.value);
           
          }}
           label="Password" placeholder="Password"></InputBox>

          <Button label="Signup"  onClick={async()=>{
          const response= await  axios.post("http://localhost:3000/api/v1/user/signup",{
              username,
              firstName,
              lastName,
              password
            });
            console.log(response)
            localStorage.setItem("token",response.data.token)
            Navigate("/dashboard")
          }}></Button>
          <BottomWar label="Already have an account? " buttonText={"SignIn"}></BottomWar>

        </div>
      </div>


    </div>
  </div>
}


