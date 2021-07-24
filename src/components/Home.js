import React from "react";
import { Redirect } from "react-router";

const Home = ({ user }) => {
  if (user === "Not_Logged") {
    return <Redirect to={"/login"} />;
  }
  return (
    <div>
      <h1>Welcome to our website</h1>
      <p>{user}</p>
      {/* <button onClick={e =>logout(e)}>log out</button> */}
    </div>
  );
};

export default Home;
