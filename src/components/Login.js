import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { checking, logout } from "../PureFunctions/LoginCheck";

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
      data.data.message === "You are logged in."
        ? history.goBack()
        : history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checking(user, history);
  }, [user, history])
  return (
    <form
      onSubmit={handleSubmit}
      className="my-5 d-flex flex-column  col-8 mx-auto"
    >
      <input
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        className="my-2"
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        className="my-2"
        type="password"
        placeholder="password"
      />
      <button className="my-2 w-50" type="submit">
        Log in
      </button>
    </form>
  );
};

export default Login;
