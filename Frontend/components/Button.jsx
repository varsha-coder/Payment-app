export function Button({ label ,onClick}) {
    return <button type="button" onClick={onClick}
        className=" pt-4  mt-4 inline-block border border-gray-300 rounded-md
     px-16 py-3 bg-black text-white  w-full cursor-pointer  ">
     {label}
    </button>
}
