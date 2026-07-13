const WeatherDetails = ({ icon, temp, city, country }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="Weather Icon" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}, {country}</div>
    </>
  );
};

export default WeatherDetails;