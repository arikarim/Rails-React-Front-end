import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import registration from "./registration.css";
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
  if (user === "Logged") {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="login-div">
      <form
        onSubmit={handleSubmit}
        className="my-5 d-flex flex-column  col-10 col-md-8 mx-auto p-5"
      >
        <label htmlFor="email" className="col-form-label my-2">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="my-3"
          type="email"
          placeholder="email"
          required
        />
        <label htmlFor="password" className="col-form-label my-2">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="my-3"
          type="password"
          placeholder="password"
          required
        />
        <button className="my-2 btn btndark" type="submit">
          Log in
        </button>
        <a className="text-decoration-none link-dark my-2" href="/signup">
          Sign up
        </a>
      </form>
    </div>
  );
};

export default Login;
