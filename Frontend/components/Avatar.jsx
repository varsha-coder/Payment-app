export  function  Avatar({label, username}){
    return <div className="flex flex-row mr-24  pb-2 pt-7">
            <div className="h-10 w-10 rounded-full bg-green flex justify-center items-center text-white">
             {label}

         </div>
         <div className="font-semibold px-2 pt-1 w-max text-xl">
            {username}
         </div>
    </div>
}