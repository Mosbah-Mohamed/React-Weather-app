import React, { useState } from "react";
import "./Temp-style.css";
import Weather from "./Weather";

const Temp = (props) => {
  const [weather, setWeather] = useState({
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const API_KEY = "81fc87a5105515cdefa7b5f3c0e1d5b0";

    console.log(city, country);

    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api.json();
    console.log(data);

    if (city && country) {
      setWeather({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      setWeather({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter Data",
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Hello weather App</h2>
        <input type="text" name="city" placeholder="Type Your City" />
        <input type="text" name="country" placeholder="Type Your Country" />
        <button type="submit">Get Weather</button>
        <Weather
          temperature={weather.temperature}
          humidity={weather.humidity}
          city={weather.city}
          country={weather.country}
          description={weather.description}
          error={weather.error}
        />
      </form>
    </div>
  );
};

export default Temp;
