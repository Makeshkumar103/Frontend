import React from 'react'
import User from './User.jsx'

function App() {
  const userData = {
    name:"kevin",
    age:26,
    phone:9876543210,
    email:"kevin@gmail.com"
  };
  return (
    <div>
      <h1>Hello World</h1>
      <User 
        name = {userData.name}
        age = {userData.age}
        phone = {userData.phone}
        email = {userData.email}    
      />
    </div>
  )
}

export default App