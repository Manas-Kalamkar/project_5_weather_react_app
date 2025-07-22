import React from 'react'
import { NavLink } from 'react-router-dom';

const Wind = ({ weatherData }) => {

  function getWindDirection(degree) {
    const directions = ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West"];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
}

  const windSpeed = (weatherData.data?.forCast.current_weather.windspeed * 3.6).toFixed(1);
  console.log(weatherData.data?.forCast.current_weather.windspeed * 3.6)
  const windDirection = getWindDirection(weatherData.data?.forCast.current_weather.winddirection);

  return (
    <div className=' flex flex-col items-center align-middle'>
 <title>Wind Information</title>
  <div className="w-full max-w-xl space-y-6">
    {/* Wind Result */}
    <div
      id="windResult"
      className="space-y-4 bg-[#191A23] p-6 rounded-xl shadow-lg border border-[#B9FF66]"
    >
      <div
        id="messageWind"
        className="text-3xl font-bold p-6 bg-[#B9FF66] rounded-xl text-black"
      >
        Wind details { weatherData?.coord ?<span id="messageWindSpan"> for {weatherData.coord?.name} ,{weatherData.coord?.country}</span>:""}
      </div>
      <div className="text-2xl text-white">
        {" "}
        Current wind speed: 
        <span id="windSpeedSpan" className="font-bold text-[#B9FF66]"> {windSpeed}km/hr</span>
      </div>
      <div className="text-2xl text-white">
        {" "}
        Wind direction: 
        <span id="windDirectionSpan" className="font-bold text-[#B9FF66]"> {windDirection}</span>
      </div>
    </div>
    {/* Navigation Buttons */}
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      <NavLink
        to="/"
        className="bg-[#B9FF66] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#a0e755] transition"
      >
        ⬅️ Home
      </NavLink>
      <NavLink
        to="/temp"
        className="bg-[#191A23] border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
      >
        🌡️ Temperature
      </NavLink>
      <NavLink
        to="/rain"
        className="bg-[#191A23] border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
      >
        🌧️ Rain
      </NavLink>
      <NavLink
        to="/aqi"
        className="bg-[#191A23] border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
      >
        🌫️ AQI
      </NavLink>
    </div>
  </div>
    </div>
  )
}

export default Wind