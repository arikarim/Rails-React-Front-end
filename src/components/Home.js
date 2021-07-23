import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

const Home = ({user}) => {
  const history = useHistory();
  
  const checking = () => {
  user == 'Not_Logged' ? history.push('/login', { from: "HomePage" }) : history.push('/')

    console.log(user);
  }
  useEffect(() => {
    checking();
  }, [user])
  return (
    <div>
      <h1>Welcome to our website</h1>
    </div>
  )
}

export default Home
