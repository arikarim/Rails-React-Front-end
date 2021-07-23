import axios from 'axios'
import React, { useState } from 'react'

const Signup = ({token, setToken}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
        const data = await axios.post('https://afternoon-coast-71095.herokuapp.com/users', 
        {
          "user": {
            "email": email,
            "password": password
          }
        }
          );
        setToken(data.headers.authorization)

    } catch(error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="my-5 d-flex flex-column  col-8 mx-auto">
      <input onChange={e => setEmail(e.target.value) } name="email" className="my-2" type="email" placeholder="email" />
      <input onChange={e => setPassword(e.target.value) }  name="password" className="my-2" type="password" placeholder="password" />
      <button className="my-2 w-50" type="submit">Sign up</button>
    </form>
  )
}

export default Signup
