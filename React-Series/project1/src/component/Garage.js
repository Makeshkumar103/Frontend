import React from "react";

function Car(props){
    return <li>I am a { props.brand }</li>;
}

function Garage(){
    const cars =['Audi', "BMW" , 'Ford'];
    return (
        <>
        <h1 style={{color:"green"}}>Who lives in my garage? </h1>
        <ul>
            {cars.map((car)=> <Car brand={car} />)}
        </ul>
        </>
    );
}

export default Garage;