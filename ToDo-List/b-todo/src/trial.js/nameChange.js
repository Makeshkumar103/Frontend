import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [name,setName] = useState("Earn");
    function handleNameChange(){
        const names = ["Earn","Grow", "Give"];
        const int =Math.floor(Math.random()*3);
        setName(names[int])
    }
   
  return (
    <main>
        <p>Lets {name} Money</p>
        <button onClick={handleNameChange}>Subscribe</button>
    </main>
)
}

export default Content