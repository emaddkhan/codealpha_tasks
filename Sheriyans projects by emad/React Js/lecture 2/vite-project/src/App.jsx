import React, { useState } from "react";
import Card from "./Components/Card";
function App() {
  const [val, setVal] = useState([
    { name: "hasfs", age: 21 },
    { name: "hasfkkfs", age: 27 },
    { name: "asfs", age: 25 },
  ]);
  return (
    <>
      <div className="p-4 bg-zinc-300 h-screen w-full">
        {val.map((item) => (
          <h1>
            {item.name} <span>{item.age}</span>
          </h1>
        ))}
        <button
          onClick={() =>
            setVal(() =>
              val.map((item) =>
                item.name === "hasfkkfs"
                  ? { name: "hasfkkfs", age: 2555 }
                  : item
              )
            )
          }
        >
          change age
        </button>
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
