import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <>
      <div className="w-1/2 mx-auto mt-10">
        <h1 className="font-bold text-red-300 text-3xl">Users</h1>
        <div className="flex flex-col">
          <Link className="p-3 bg-red-300 w-full m-1 text-white" to="/user/john">
            John
          </Link>
          <Link className="p-3 bg-red-300 w-full m-1 text-white" to="/user/emad">Emad</Link>
          <Link className="p-3 bg-red-300 w-full m-1 text-white" to="/user/khan">Khan</Link>
        </div>
        <hr />
        <Outlet/>
      </div>
    </>
  );
}

export default User;
