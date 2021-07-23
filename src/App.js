import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Home from './components/Home';


function App() {
  const [token, setToken] = useState('')
  const [user, setUser] = useState('Not_Logged')

  const fetchData = async() => {
    const heroku = 'https://afternoon-coast-71095.herokuapp.com'
    // const data = await axios.post('https://afternoon-coast-71095.herokuapp.com/users/sign_in', 
    // {
    //   "user": {
    //     "email": "ttestt@example.com",
    //     "password": "12345678"
    //   }
    // }
    //   );
      // console.log(data);
      if (token) {
        const dataa = await axios.get('https://afternoon-coast-71095.herokuapp.com/member',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
      })
      if(dataa.data.message == 'Yeppa You did it'){
        setUser('Logged')
      }
        console.log(dataa.data.message);

      }
  }
  

  useEffect(() => {
    fetchData();
  }, [token])
  return (
    <Router>
      <Nav user={user} />
      <div className="container">
        <h1>Status: {user == 'Logged' ? 'Logged in' : 'Not Logged in'}</h1>
        <Switch>
          <Route
            path="/signup"
            render={(props) => (
              <Signup {...props} token={token} setToken={setToken}
              />
              )}
          />
              <Route 
                exact
                path="/login"
                render={(props) => (
                  <Login {...props} token={token} setToken={setToken} setUser={setUser}
                   />
                )}
              />
                            <Route 
                exact
                path="/"
                render={(props) => (
                  <Home {...props} user={user}
                   />
                )}
              />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
