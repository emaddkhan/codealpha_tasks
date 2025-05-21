import React, { useContext } from "react";
import { userContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

function User() {
    const navigate=useNavigate()
  const { id } = useParams();
  const { user, setUser } = useContext(userContext);
  const userSingle = user.find((u) => u.id === Number(id));
  const backHandler=()=>{
    navigate(-1)
  }
  return (
    <div className="w-1/2 mx-auto mt-10">
      {userSingle ? (
        <>
          <h1>{userSingle.name[0]}</h1>
          <h1>{userSingle.username}</h1>
          <h1>{userSingle.email}</h1>
          <h1>{userSingle.phone}</h1>
          <button className="px-3 py-2 bg-red-300 rounded-md" onClick={backHandler}>Go Back</button>
        </>
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
}

export default User;
