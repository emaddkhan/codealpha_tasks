import axios from "axios";
import React, { useEffect, useState } from "react";

function Services() {
  const [user, setUser] = useState([]);
  const getUser = () => {
    const userApi = "https://fakestoreapi.in/api/users";
    axios.get(userApi).then((products) => {
      setUser(products.data.users);
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="mt-10">
        {user.length>0?(<ul>
        {user.map((items, index) => {
          return (<li className="p-5 rounded-lg bg-red-300 w-1/2 mt-2" key={index}>{items.username}</li>);
        })}
      </ul>):<h1>loading...</h1>}
      </div>
    </>
  );
}

export default Services;
