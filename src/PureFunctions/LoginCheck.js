export const checking = (user, history) => {
  user === "Not_Logged"
    ? history.push("/login")
    : history.push("/");
    console.log(user);
};
