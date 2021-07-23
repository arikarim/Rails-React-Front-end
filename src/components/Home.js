import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { checking } from "../PureFunctions/LoginCheck";

const Home = ({ user, setUser }) => {
  const history = useHistory();
  const logout = async (setUser, user, history) => { 
    try {
      const toke = JSON.parse(localStorage.getItem("token"));
      const data = await axios.delete(
        "https://afternoon-coast-71095.herokuapp.com/users/sign_out",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: toke,
          },
        }
      );
      // localStorage.setItem("token", "");
      console.log(data.data.message);
      localStorage.setItem("token", JSON.stringify(""));
      data.data.message === "You are logged out."
        ? setUser("Not Logged") 
        : setUser("Not Logged");
        data.message === "You are logged out."
        ? history.push("/login")
        : history.push("/");
      console.log(user)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checking(user, history);
  }, [user, history]);
  return (
    <div>
      <h1>Welcome to our website</h1>
      <button onClick={e =>logout(setUser,user,history)}>log out</button>

    </div>
  );
};

export default Home;
