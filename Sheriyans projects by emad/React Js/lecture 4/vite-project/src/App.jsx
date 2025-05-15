import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Routing from "./utils/Routing";
import Nav from "./components/Nav";

function App() {
  
  return (
    <>
      <Nav />
      <Routing/>
    </>
  );
}

export default App;
