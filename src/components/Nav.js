import axios from "axios";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { checking, logout } from "../PureFunctions/LoginCheck";

const Nav = ({ user}) => {

  return (
    <nav className="bg-dark">
      {user === 'Not_Logged' ? (
        <ul className="list-unstyled d-flex py-3 justify-content-end">
          <li className="mx-3">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="mx-3">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      ) : (
        <ul className="list-unstyled d-flex py-3 justify-content-end">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* <li className="mx-3">
            <button onClick={logout}>Log out</button>
          </li> */}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
