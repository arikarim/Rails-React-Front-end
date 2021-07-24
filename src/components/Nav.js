import axios from "axios";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { checking, logout } from "../PureFunctions/LoginCheck";

const Nav = ({setUser, user}) => {
  const history = useHistory();
  const logout = async (e,setUser) => { 
    try {
      const toke = JSON.parse(localStorage.getItem("token"));
      const data = await axios.delete(
        "https://afternoon-coast-71095.herokuapp.com/users/sign_out",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: toke,
          },
        }
      );
      console.log(data.data.message);
      localStorage.setItem("token", JSON.stringify(""));
      setUser('Not Logged')
      // history.push("/login");


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-dark">
      {user === 'Not_Logged' ? (
        <ul className="list-unstyled d-flex py-3 justify-content-end">
          <li className="mx-3">
            <Link className="text-decoration-none link-light" to="/signup">Sign Up</Link>
          </li>
          <li className="mx-3">
            <Link className="text-decoration-none link-light" to="/login">Login</Link>
          </li>
        </ul>
      ) : (
        <ul className="list-unstyled d-flex py-3 justify-content-end">
          <li className="mx-3">
            <Link className="text-decoration-none link-light" to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link className="text-decoration-none link-light" to="/dashboard">Dashboard</Link>
          </li>
          <li className="mx-3">
            <button type="submit" onClick={(e) => logout(e, setUser)}>Log out</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
