import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

function Router() {
  return (
    <div className="p-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default Router;
