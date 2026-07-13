import React from "react";
import './Home.css';
class Car extends React.Component{
    render(){
        return <div><h2>Hi, i am a Car!</h2>
        <p>Class Componenet
            A class Component must include the extends React.Component statement.This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
        </div>
    }
}

function  Home(props){

    return <div className="s1"><h1>Hello all</h1>
    <h2>My car is {props.name} color!..</h2>
    <h2>My car price is {props.price}</h2>
    <Car/>
    </div>
}
export default Home;