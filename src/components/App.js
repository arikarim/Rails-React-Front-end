import axios from "axios";
import { useEffect, useState } from "react";
import Routes from "../Routes/Routes";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("Not_Logged");

  const fetchData = async () => {
    const toke = JSON.parse(localStorage.getItem("token"));
    setToken(toke);

    if (token !== "") {
      try {
        const dataa = await axios.get(
          "https://afternoon-coast-71095.herokuapp.com/member",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        dataa.data.message === "Yeppa You did it"
          ? setUser("Logged")
          : setUser("Not_Logged");
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [token, user]);
  return (
    <div>
      <Routes user={user} setUser={setUser} />
    </div>
  );
}

export default App;
