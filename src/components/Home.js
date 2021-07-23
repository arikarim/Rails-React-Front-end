import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { checking } from "../PureFunctions/LoginCheck";

const Home = ({ user }) => {
  const history = useHistory();

  useEffect(() => {
    checking(user, history);
  }, [user, history]);
  return (
    <div>
      <h1>Welcome to our website</h1>
    </div>
  );
};

export default Home;
