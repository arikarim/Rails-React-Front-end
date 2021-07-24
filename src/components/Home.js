import axios from "axios";
import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import { checking } from "../PureFunctions/LoginCheck";

const Home = ({token, user, setUser }) => {

  const history = useHistory();
  console.log(user);
  if (user === 'Not_Logged') {
    return <Redirect to={"/login"} />;
  }
  // useEffect(() => {
  //   // checking(user, history);
  // }, [user, history]);
  return (
    <div>
      <h1>Welcome to our website</h1>
      <p>{user}</p>
      {/* <button onClick={e =>logout(e)}>log out</button> */}

    </div>
  );
};

export default Home;
