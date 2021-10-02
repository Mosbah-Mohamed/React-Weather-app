import React from "react";

const Weather = (props) => {
  const { temperature, humidity, city, country, description, error } = props;
  return (
    <div className="info">
      {temperature && (
        <p className="info_key">
          {" "}
          Temperature:
          <span className="info_value"> {temperature} </span>
        </p>
      )}

      {city && (
        <p className="info_key">
          {" "}
          city:
          <span className="info_value"> {city} </span>
        </p>
      )}

      {country && (
        <p className="info_key">
          {" "}
          country:
          <span className="info_value"> {country} </span>
        </p>
      )}

      {humidity && (
        <p className="info_key">
          {" "}
          humidity:
          <span className="info_value"> {humidity} </span>
        </p>
      )}

      {description && (
        <p className="info_key">
          {" "}
          description:
          <span className="info_value"> {description} </span>
        </p>
      )}

      {error && (
        <p className="info_key">
          {" "}
          error:
          <span className="info_value"> {error} </span>
        </p>
      )}
    </div>
  );
};

export default Weather;
