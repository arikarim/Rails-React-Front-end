import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Nav from '../Pages/Nav';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

const Routes = ({user, setUser}) => {
  return (
    <div>
      <Router>
        <Nav setUser={setUser} />
        <div className="container">
          <h1>Status: {user === "Logged" ? "Logged in" : "Not Logged in"}</h1>
          <Switch>
            <Route
              path="/signup"
              render={(props) => (
                <Signup {...props} user={user} setUser={setUser} />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login {...props} user={user} setUser={setUser} />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} user={user} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Routes
