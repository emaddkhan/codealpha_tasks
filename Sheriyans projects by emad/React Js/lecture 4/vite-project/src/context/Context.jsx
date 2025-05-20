import React, { createContext } from 'react'

export const UserContext =createContext()
function Context(props) {
  return (
    <UserContext.Provider>{props.children}</UserContext.Provider>
  )
}

export default Context