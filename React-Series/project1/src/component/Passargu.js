import React from "react";
//Passing arguments 
// To pass an argument to event handler, use an arrow function.
function Passargu(){
    const shoot = (a) => {
        alert(a);
    }
    return (
        <button onClick={()=> shoot("Goal!")}>Take the shot!</button>
    );
}

export default Passargu;