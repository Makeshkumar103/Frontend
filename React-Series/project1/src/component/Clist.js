import React from "react";
import Garage from "./Garage";
function Car1(props){
    return <li> {props.i1 } I am a { props.brand }</li>;
}
function Clist() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'},
    ];
    return(
    <>
    <Garage />
        <h1 style={{color:"green"}}>Who lives in my 2nd garage?</h1>
        <ul>
            {cars.map((car)=> <Car1 key={car.id} brand={car.brand} />)}       
        </ul>
    </>
    );
}


export default Clist;
