import { data } from "autoprefixer";
import axios from "axios";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="p-5">
        <nav className="flex justify-center gap-10">
          <Link className="font-semibold" to="/">
            Home
          </Link>
          <Link className="font-semibold" to="/show">
            Show
          </Link>
          <Link className="font-semibold" to="/service">
            Services
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

//USEEFFECT
//useeffect aik aisa function jisse hum jb koi component delete ho rha ho toh ya delete ho rha ho toh tb chalate hain
//useEffect aik callback(jis function ka koi name na ho)accept krta hai uske andr hum jo bhi code likhte hain toh woh tb chalta hai jb
//component create ho rha ho or return k agee callback andr jb koi code likhte hain toh woh tb chalta hai jb component delete ho rha ho
//useeffect component ko rerendering krta hai mgr agr ap useeffect k second parameter me [] lagade  toh component rerendering hoga balke
//component updating hoga
//agr large data refresh kra rhe hain or hum chate hain k hamara data refresh ho toh hum ki krein[isme use variable ka name ya state name
//likh deinge] toh jb bhi state me change hoga toh component refresh hojayeg
