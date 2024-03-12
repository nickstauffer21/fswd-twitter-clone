import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import UserPage from "../user/userPage";
import UserPublic from "../userPublic/userPublic";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <div>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
