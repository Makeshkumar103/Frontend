import React from 'react';
import './condition.css';
function Condition(props){
    const cars = props.vehicle;
    return (
        <div>
            <h1 className='g'>Garage</h1>
            { cars.length > 0 &&
                <h2 className='g'>
                    You have {cars.join(",")} cars in your garage.
                </h2> 
            }
        </div>
    );
}


export default Condition;