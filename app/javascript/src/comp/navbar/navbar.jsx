import React from "react";
import "./navbar.scss";
import { Link, NavLink, useLocation, isActive } from "react-router-dom";
import { safeCredentials, handleErrors } from "@utils/fetchHelper";

const Navbar = (props) => {
  const logOut = () => {
    fetch(
      `/api/sessions`,
      safeCredentials({
        method: "DELETE",
      })
    )
      .then(handleErrors)
      .then((res) => {
        if (res.success) {
          window.location.href = "/";
        } else {
          throw new Error("unable to logout");
        }
      });
  };

  return (
    <header className="shadow">
      <div className="p-0 container-lg">
        <nav className="navbar navbar-expand-lg nav-twitter ">
          <Link to="/dashboard" id="nav-brand">
            <div className="nav-title">Twitter</div>
          </Link>
          <div className="dropdown">
            <button className="user">User</button>
            <ul className="content">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">
                  User
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link log-out">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
