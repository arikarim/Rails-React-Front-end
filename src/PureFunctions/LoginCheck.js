export const checking = (user, history) => {
  user === "Not_Logged"
    ? history.push("/login", { from: "HomePage" })
    : history.push("/");
};
