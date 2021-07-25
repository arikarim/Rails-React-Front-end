import React from "react";
import { Redirect } from "react-router";

const Home = () => {
  const toke = JSON.parse(localStorage.getItem("token"));
  if (toke === "") {
    return <Redirect to={"/login"} />;
  }
  return (
    <div>
      <h1>Welcome to our website</h1>
    </div>
  );
};

export default Home;
