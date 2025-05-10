import React, { useState } from "react";
import Card from "./Components/Card";
import { FaArrowRightLong } from "react-icons/fa6";
function App() {
  const [val,setVal] =useState(false)
  return (
    <>
      <div className="p-4 bg-zinc-300 flex items-center justify-center h-screen w-full">
       <div className="w-80 overflow-hidden flex h-44 relative bg-zinc-400 rounded-md">
        <img className={`flex shrink-0 h-full w-full duration-300 ease-in-out object-cover ${val===false?"translate-x-[0%]":"-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1746469410708-493e86266c05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
        <img className={`flex shrink-0 h-full w-full duration-300 ease-in-out object-cover ${val===false?"translate-x-[0%]":"-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1746768934151-8c5cb84bcf11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
        <span onClick={()=>setVal(()=>!val)} className={`h-10 w-10 bg-[#dadada9b] duration-200 -translate-x-[50%] ${val?"rotate-180":"rotate-0"} left-1/2 rounded-full flex items-center justify-center absolute bottom-[10%]`}>
          <FaArrowRightLong size={"1.2em"}/>
        </span>
       </div>
      </div>
    </>
  );
}
export default App;

//aik warning ati hai k each child should have its unique number toh ye islia hota hai k react apna aik virtual dom bnata hai to jb bhi map
//se elem ate hai toh usko sb same lgte toh ise resolve krne ka trika ye hai k hum child ko aik key de de yani map k andr jo function hota
//use do param pass krayenge aik toh value hogi or dosra index kiu k index hr bar change hota hai or key k andr bhi index de dein gai

//Fragment
//fragment basically ye hai k ap bina extra div bnye ap cheezon ko wrap kr skte ho kuch yoo <></>

//useState stete ko turant complete nhi krta woh usko complete krta hai apne hisab se function completion ke baad to fix perfomence issuse
