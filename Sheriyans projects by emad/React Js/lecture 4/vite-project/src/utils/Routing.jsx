import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import { Route, Routes } from "react-router-dom";
import UserDetail from "../components/UserDetail";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/user" element={<User />}>
        <Route path="/user/:name" element={<UserDetail />} />
      </Route>
    </Routes>
  );
}

export default Routing;
