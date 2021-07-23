import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ status }) => {
  return (
    <nav className="bg-dark">
      {status === false ? (
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
        </ul>
      )}
    </nav>
  );
};

export default Nav;
