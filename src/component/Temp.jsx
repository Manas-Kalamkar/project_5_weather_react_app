import React from 'react'
import { NavLink } from 'react-router-dom';

const Temp = ({ weatherData}) => {
    const time = weatherData.data?.forCast.current_weather.time;
    const currentTime1 = time?time.slice(0,13) + ":00":'';
    
    const indx = weatherData.data?.forCast.hourly.time.indexOf(currentTime1);  
    let actualHourlyIndex = indx !==-1 ? indx : 0;

    const temperature = weatherData.data?.forCast.current_weather.temperature || 'N/A';
    const feelsLikeTemp = weatherData.data?.forCast.hourly.apparent_temperature[actualHourlyIndex] || 'N/A';
    const humidity = weatherData.data?.forCast.hourly.relative_humidity_2m?.[actualHourlyIndex] || "N/A"


    const minTemp = weatherData.data?.forCast.daily.temperature_2m_min || [];
    const maxTemp = weatherData.data?.forCast.daily.temperature_2m_max || [];
    const days = weatherData.data?.forCast.daily.time || [];
    const today =  new Date().toISOString().split('T')[0];
    let index= days.indexOf(today);

    const minTempValue = minTemp[index] || 'N/A';
    const maxTempValue = maxTemp[index] || 'N/A';
    return (
    <div className=' flex flex-col items-center align-middle'>
  <title>Temperature</title>
  <div className="w-full mt-24 max-w-xl space-y-6  items-center">
    {/*Temp Result */}
    <div
      id="tempResult"
      className=" space-y-4 bg-[#191A23] p-6 rounded-xl shadow-lg border border-[#B9FF66]"
    >
      <div
        id="messageTemp"
        className="text-3xl font-bold p-6 bg-[#B9FF66] rounded-xl"
      >
        Temperature details{" "}
        { weatherData?.coord ?<span id="messageSpan" className="font-bold text-[#191A23]"> for {weatherData.coord?.name} ,{weatherData.coord?.country}</span>:""}
      </div>
      <div id="temp" className="text-2xl text-white">
        {" "}
        Current temperature:{" "}
        <span id="tempValueSpan" className="font-bold text-[#B9FF66]">{temperature}°C</span>
      </div>
      <div id="feelsLikeTemp" className="text-2xl text-white">
        {" "}
        Feels like temperature:{" "}
        <span id="feelsLikeValueSpan" className="font-bold text-[#B9FF66]">{feelsLikeTemp}°C</span>
      </div>
      <div id="minTemp" className="text-2xl text-white">
        {" "}
        Minimum temp (daily):{" "}
        <span id="minValueSpan" className="font-bold text-[#B9FF66]">{minTempValue}°C</span>
      </div>
      <div id="maxTemp" className="text-2xl text-white">
        {" "}
        Maximum temp (daily):{" "}
        <span id="maxValueSpan" className="font-bold text-[#B9FF66]">{maxTempValue}°C</span>
      </div>
      <div id="humidity" className="text-2xl text-white">
        {" "}
        Humidity:{" "}
        <span id="humidityValueSpan" className="font-bold text-[#B9FF66]">{humidity}%</span>
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
        to="/wind"
        className="bg-[#191A23] border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
      >
        💨 Wind Speed
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

export default Temp