import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import Nav from "./components/Nav";
import Signup from "./Pages/Signup";
import Home from "./components/Home";

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
    console.log(token);
  }, [token, user]);
  return (
    <div>
      <Router>
        <Nav user={user} setUser={setUser} />
        <div className="container">
          <h1>Status: {user === "Logged" ? "Logged in" : "Not Logged in"}</h1>
          <Switch>
            <Route
              path="/signup"
              render={(props) => (
                <Signup
                  {...props}
                  user={user}
                  token={token}
                  setToken={setToken}
                  setUser={setUser}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login {...props} user={user} setUser={setUser} />
              )}
            />
            {/* <Route
            exact
            path="/logout"
            render={(props) => (
              <Logout
                {...props}
                token={token}
                user={user}
                setUser={setUser}
                setToken={setToken}
              />
            )}
          /> */}

            <Route
              exact
              path="/"
              render={(props) => (
                <Home token={token} {...props} user={user} setUser={setUser} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
