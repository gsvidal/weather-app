import React, { Fragment } from 'react';

const Weather = ({data}) => {

  console.log(data);
  // Extract info
  const { name, main, wind } = data;

  if(!name) return null;

  // Converting from Kelvin to Celcius degrees
  const temp = parseFloat((main.temp - 273.15).toFixed(2));
  const tempMax = parseFloat((main.temp_max - 273.15).toFixed(2));
  const tempMin = parseFloat((main.temp_min - 273.15).toFixed(2));

  let modifier;

  modifier = temp >= 20 ? "sun" : (temp > 10 ? "cloud" :"cloud-snow")

  return(
    <Fragment>
      <div className="card-panel white col s12">
        <div className="black-text">
          <h2 className="weather-city">{name}</h2>
          <p className="temperature">
           <span className={`icon-temp icon-temp--${modifier}`}></span> <p> { temp } <span> &#x2103; </span></p>
          </p>
          <p>
            {`Max Temp:  ${tempMax}`} <span> &#x2103; </span>
          </p>
          <p>
          {`Min Temp:  ${tempMin}`} <span> &#x2103; </span>
          </p>
          <ul className="data-weather">
            <li><span className="data-weather__item humidity"></span> {`Humidity:  ${main.humidity} %`}</li>
            <li><span className="data-weather__item wind"></span> {`Wind:  ${wind.speed} m/s`}</li>
            <li><span className="data-weather__item pressure"></span> {`Pressure:  ${main.pressure} hPa`}</li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Weather;