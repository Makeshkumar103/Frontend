import React from "react";
import './Forms.css';
function Forms(){
    return (
        <form>
            <button onClick={()=>("close")} className='x'>x</button><br />
            <label>Enter your name:
            <input type="text " />
            </label>
            <label>Enter your phone no:
            <input type="text " />
            </label>
            <button onClick={()=>("submit")}>Submit</button>
            <button onClick={()=>("submit")}>Clear</button>
        </form>
    );
}


export default Forms;
