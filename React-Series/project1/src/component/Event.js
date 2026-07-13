import React from 'react';
import './Event.css';
function Event(){
    const lot1=(name)=>{
        alert(`Batch 1 ${name} are ready for Test drive!`);

    }
    const lot2=(name)=>{
        alert(`Batch 2 ${name} are not ready for Test drive!`);
    }

    const lot3=(name2,b)=>{
        alert(`Name of the car ${name2}`);
        alert(b.type);
    }
    return(
        <div className='events'>
        <button onClick={()=>lot1("audi s5")}>Testing Batch1</button>
        <button onClick={()=>lot2("Audi z6")}>Testing Batch2</button>
        <button onClick={(event) => lot3("goal!", event)}>Takes the shot!</button>
        </div>
    )
}

export default Event;