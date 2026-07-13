import React from 'react';
// import Garage from './component/Garage';

function Car1(props){
    return <li>{ props.i1 } I am a { props.brand }</li>;
}

function List1() {
    const cars = [
        {id: 1, brand: 'TATA Nexon'},
        {id: 2, brand: 'Duster'},
        {id: 3, brand: 'Jeep'},
    ];
    return (
        <>
        {/* <Garage /> */}
        <h1>Who lives in my 2nd garage?</h1>
        <ul>
            {cars.map((car) => <Car1 i1={car.id} brand={car.brand} />)}
        </ul>
        </>
    )
}

export default List1;
