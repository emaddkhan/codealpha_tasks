import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-[85%] h-screen p-5 flex flex-wrap gap-2 overflow-x-hidden overflow-y-auto">
        <Link to="/details/1" className="w-[18%] h-[30vh] border rounded-md shadow p-3">
          <div
            className="w-full h-[80%] bg-cover bg-center rounded-md transition-transform hover:scale-105"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg)",
            }}
          ></div>
          <h3 className="text-center mt-2 hover:text-blue-300 cursor-pointer">
            Lorem ipsum dolor sit amet.
          </h3>
        </Link>
      </div>
    </>
  );
}

export default Home;
