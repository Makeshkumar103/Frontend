import React from 'react'

const Content = () => {
    function handleNameChange(){
        const names = ["Earn","Grow", "Give"];
        const int =Math.floor(Math.random()*3);
        return names[int];
    }
    const handleClick = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.innerText)

    }
    const handleClick2 = (name) => {
        console.log(`Thanks for support ${name}`)
    }

  return (
    <main>
        <p>Lets {handleNameChange()} Money</p>
        <p onDoubleClick={() => handleClick2('bala')}>Hello</p>
        <button onClick={() => handleClick2("Makesh")}>Subscribe</button>
        <button onClick={(e) => handleClick(e)}>Event</button>

    </main>
)
}

export default Content