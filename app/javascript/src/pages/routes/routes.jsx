import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import User from "../user-private/user-private";
import Navbar from "@src/comp/navbar/navbar";
import UserPublic from "../user-public/user-public";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/user/:username" element={<UserPublic />} />
          <Route path="/user" element={<User />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
