import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

function Context(props) {
  const [user, setUser] = useState([]);
  const Api = "https://fakestoreapi.in/api/users";
  const getUser = () => {
    axios.get(Api).then((user) => {
      console.log(user.data.users);
      setUser(user.data.users)
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
}

export default Context;
