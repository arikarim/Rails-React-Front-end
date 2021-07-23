import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { checking } from "../PureFunctions/LoginCheck";

const Logout = ({user, setUser, setToken }) => {
  const history = useHistory();

  const logout = async () => {
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
      // setToken(null);
      console.log(data.data.message);
      localStorage.setItem("token", JSON.stringify(""));
      data.data.message === "You are logged out."
        ? setUser("Not Logged") 
        : setUser("Not Logged");
      data.data.message === "You are logged out." ? checking(user, history) : checking( user, history);
      console.log(user)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logout();
    
    // eslint-disable-next-line
  }, []);
  return <div></div>;
};

export default Logout;
