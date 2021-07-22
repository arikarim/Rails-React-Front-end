import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [token, setToken] = useState('')

  const fetchData = async() => {
    const heroku = 'https://afternoon-coast-71095.herokuapp.com'
    const data = await axios.post('https://afternoon-coast-71095.herokuapp.com/users/sign_in', 
    {
      "user": {
        "email": "ttestt@example.com",
        "password": "12345678"
      }
    }
      );
      console.log(data);
      if (data.headers.authorization) {
        const dataa = await axios.get('https://afternoon-coast-71095.herokuapp.com/member',{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': data.headers.authorization
          }
      })
        console.log(dataa.data.message);

      }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
