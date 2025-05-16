import { data } from "autoprefixer";
import axios from "axios";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";

function App() {
  return (
    <>
      <div className="p-5">
        <nav className="flex justify-center gap-10">
          <Link className="font-semibold" to="/">Home</Link>
          <Link className="font-semibold" to="/show">Show</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/show" element={<Show/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
