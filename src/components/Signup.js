import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

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
      // data.data.message === "You are logged in."
      //   ? history.goBack()
      //   : history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
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
        Sign up
      </button>
    </form>
  );
};

export default Signup;
