import axios from "axios";
import { Redirect } from "react-router";

export const checking = (user, history) => {
  user === "Not_Logged" ? history.push("/login") : history.push("/");
};

export const logout = async (setUser, history) => {
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
    localStorage.setItem("token", JSON.stringify(""));
    setUser("Not Logged");
    history.push("/login");

    
  } catch (error) {
    console.log(error);
  }
};
