import { useState } from "react";
function Car_hook1() {
    const [car,setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color:"red"
    });
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color:"blue" }
        });
    }
    return (
        <>
        <h4>My {car.brand}</h4>
        <p>It is a {car.color} {car.model} from {car.year}.</p>
        <button 
         type="button"
         onClick={updateColor}
        >Blue</button>
        </>
    )
}

function Car_hook() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] =useState("Yellow");

    return (
        <div>
            <h1>My {brand}</h1>
            <p>
              It is a {color} {brand} {model} from {year}.
            </p>
            <button type="button" onClick={()=> setModel("Type Fss")} >Model</button>
            <button type="button" onClick={()=> setBrand("Audi")} >Brand</button>
            <button type="button" onClick={()=> setYear("1995")} >Year</button>
            <button type="button" onClick={()=> setColor("Green")} >Color</button>
        </div>
    )
}

function FavoriteColor() {
    const [color, setColor] = useState("red");

return (
    <div>
        <Car_hook1/>
        <h1 style={{color:"green"}}>My favourite color is {color}!</h1>
        <button type="button"
        onClick={() => setColor("blue")}>Blue</button>
        <hr/>
        <Car_hook/>
    </div>
)
}

export default FavoriteColor;