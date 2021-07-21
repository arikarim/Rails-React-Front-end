import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [input, setInput] = useState('')

  const fetchData = async() => {
    const heroku = 'https://afternoon-coast-71095.herokuapp.com'
    const data = await axios.post('http://localhost:3001/users/sign_in', 
    {
      "user": {
        "email": "ttestt@example.com",
        "password": "12345678"
      }
    },
  
  {withCredentials: true}
      );
      const headers = {

      }
      console.log(data);
      const dataa = await axios.get('http://localhost:3001/member',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': data.headers.authorization
        }
      },{withCredentials: true});
      console.log(dataa.data.message);
  }
  // const fetchDataa = async() => {
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${input}`
  //   }
  //   console.log(headers.Authorization);
  //   const dataa = await axios.get('https://fierce-tundra-36709.herokuapp.com/member-data', {headers});
  //   console.log(data);
  //   return data;
  // }

  useEffect(() => {
    fetchData();
    // setTimeout(() => {
    //   fetchDataa();
    // }, 2000);
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
