import React from 'react'
import { useState } from 'react';
const Content = () => {
    function handleNameChange(){
        const names = ["Earn","Grow", "Give"];
        const int =Math.floor(Math.random()*3);
        return names[int];
    }
    const [count, setCount] = useState(99)
    function incrementFunction(){
        setCount((prevcount) => {return prevcount + 1 })
    }

    function decrementFunction(){
        setCount((prevcount) => {return prevcount - 1 })
    }

  return (
    <main>
        <p>Lets {handleNameChange()} Money</p>
        <button> Subscribe</button><br></br>
        <button onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>


    </main>
)
}

export default Content