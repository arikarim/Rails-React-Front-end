import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Logout from "./components/Logout";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("Not_Logged");

  const fetchData = async () => {
    // const data = await axios.post('https://afternoon-coast-71095.herokuapp.com/users/sign_in',
    // {
    //   "user": {
    //     "email": "ttestt@example.com",
    //     "password": "12345678"
    //   }
    // }
    //   );
    // console.log(data);
    const toke = JSON.parse(localStorage.getItem("token"));
    setToken(toke);
    console.log(toke);

    if (token !== '') {
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
        console.log(user);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [token, user]);
  return (
    <Router>
      <Nav user={user} setToken={setToken} setUser={setUser} />
      <div className="container">
        <h1>Status: {user === "Logged" ? "Logged in" : "Not Logged in"}</h1>
        <Switch>
          <Route
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
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
            render={(props) => <Home {...props} user={user} setUser={setUser} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
