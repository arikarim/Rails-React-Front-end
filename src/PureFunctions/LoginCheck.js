import axios from "axios";

export const checking = (user, history) => {
  user === "Not_Logged"
    ? history.push("/login")
    : history.push("/");
    console.log(user);
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
    console.log(data.data.message);
    localStorage.setItem("token", JSON.stringify(""));
    setUser('Not Logged')
    history.push("/login");


  } catch (error) {
    console.log(error);
  }
};