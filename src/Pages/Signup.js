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
    <div className="signup-div">
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
          Sign up
        </button>
        <a className="text-decoration-none link-dark my-2" href="/login">
          Log in
        </a>
      </form>
    </div>
  );
};

export default Signup;
