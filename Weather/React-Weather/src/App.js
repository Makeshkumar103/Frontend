import './App.css';
import { useState } from "react";
import WeatherDetails from './components/WeatherDetails';

const WeatherDetails = ({ icon,temp,city,country }) =>{
  <>
  <div className="image">
    <img src={icon} alt="" />
  </div>
  <div className="temp">{temp}"c</div>
  <div className="location">{city}</div>
  </>
}
function App() {
  // const [icon, setIcon] = useState("$")
  // const [temp, setTemp] = useState(0)
  // const [city, setCity] = useState("Chennai")
  // const [country, setCountry] = useState('India')

  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <wheatherDetails icon={icon} temp={temp} city={city} country={country} />
          <input type="text"          className='cityInput'          placeholder='Search City' />
          <div className='search-icon'>
            <img src="" alt="" />  
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
