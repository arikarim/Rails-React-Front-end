import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

const Signup = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  if (user === 'Logged') {
    return <Redirect to={"/"} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://afternoon-coast-71095.herokuapp.com/users",
        {
          user: {
            email: email,
            password: password,
          },
        }
      );
      localStorage.setItem("token", JSON.stringify(data.headers.authorization));
      data.data.message === "Signed up sucessfully."
        ? setUser("Logged")
        : setUser("Not Logged");
        history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="my-5 d-flex flex-column  col-8 mx-auto"
    >
      <label htmlFor="email" className="col-form-label">
        Email
      </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        className="my-2"
        type="email"
        placeholder="email"
      />
      <label htmlFor="password" className="col-form-label">
        Password
      </label>

      <input
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        className="my-2"
        type="password"
        placeholder="password"
      />
      <button className="my-2 btn btn-dark" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
