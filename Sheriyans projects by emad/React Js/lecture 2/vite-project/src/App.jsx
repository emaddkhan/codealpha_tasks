import React, { useState } from "react";
import Card from "./Components/Card";
function App() {
  const [val,setVal] =useState(true)
  return (
    <>
      <div className="p-4 bg-zinc-300 h-screen w-full">
        <h1>{val?"dont go":"go out"}</h1>
        <button onClick={()=>setVal(()=>!val)} className={`py-1 px-2 text-white ${val?"bg-blue-500":"bg-red-500"} rounded-full font-semibold`}>change</button>
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
