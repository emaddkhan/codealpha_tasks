import React, { createContext, useState } from 'react'

export const UserContext =createContext()
function Context(props) {
  const [user,setUser]=useState([
    {id:0,name:"Emad",place:"USA"},
    {id:1,name:"Khan",place:"UAE"},
    {id:2,name:"Yousuf",place:"China"},
  ]);
  return (
    <UserContext.Provider value={{user,setUser}}>{props.children}</UserContext.Provider>
  )
}

export default Context