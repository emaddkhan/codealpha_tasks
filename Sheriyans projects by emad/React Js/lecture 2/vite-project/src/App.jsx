import React, { useState } from 'react'
import Card from './Components/Card'

function App() {
  const data=[
    {name:"John",profession:"painter",img:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",freind:false},
    {name:"Michael",profession:"Singer",img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",freind:false},
    {name:"ferovail",profession:"actor",img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",freind:false},
  ]
  const [realData,setRealData] =useState(data)
  const cardBtnHandler =()=>{
    alert("hey")
  }
  return (
    <>
     <div className='h-screen w-full flex items-center bg-zinc-300 gap-2 justify-center'>
      {
        realData.map((item,index)=>(
          <Card cardBtnHandler={cardBtnHandler} values={item} key={index}/>
        ))
      }
     </div>
    </>
  )
}

export default App

//aik warning ati hai k each child should have its unique number toh ye islia hota hai k react apna aik virtual dom bnata hai to jb bhi map
//se elem ate hai toh usko sb same lgte toh ise resolve krne ka trika ye hai k hum child ko aik key de de yani map k andr jo function hota
//use do param pass krayenge aik toh value hogi or dosra index kiu k index hr bar change hota hai or key k andr bhi index de dein gai

//Fragment
//fragment basically ye hai k ap bina extra div bnye ap cheezon ko wrap kr skte ho kuch yoo <></>

//useState stete ko turant complete nhi krta woh usko complete krta hai apne hisab se function completion ke baad to fix perfomence issuse
//=====PROPS======***

//props use hote hain apke component ko reusebal bnane k liye ,consider kro apke pass aik button hai or apko us utton ko alag alag jagah
//dalna hai app me ,toh aap aik aik button component bnayein uska data hard coded krne ki jagah parent se send krdein and child componet pr 
//use krlein
//stae jahan bnti hai whin modify ki ja skiti hai