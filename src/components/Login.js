import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import { Link } from "react-router-dom";
import { checking } from "../PureFunctions/LoginCheck";
// import { checking, logout } from "../PureFunctions/LoginCheck";

const Login = ({ setUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://afternoon-coast-71095.herokuapp.com/users/sign_in",
        {
          user: {
            email: email,
            password: password,
          },
        }
      );
      console.log(data.data.message);
      localStorage.setItem("token", JSON.stringify(data.headers.authorization));
      data.data.message === "You are logged in."
        ? setUser("Logged")
        : setUser("Not Logged");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // checking(user, history);
  }, [user, history]);
  return (
    <Router>
    <form
      onSubmit={handleSubmit}
      className="my-5 d-flex flex-column  col-8 mx-auto"
    >
      <label htmlFor="email" className="col-form-label">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        className="my-2"
        type="email"
        placeholder="email"
      />
      <label htmlFor="password" className="col-form-label">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        className="my-2"
        type="password"
        placeholder="password"
      />
      <button className="my-2 btn btn-dark" type="submit">
        Log in
      </button>
      <Link className="text-decoration-none link-dark" to="/signup">Sign Up</Link>
    </form>
    </Router>
  );
};

export default Login;
