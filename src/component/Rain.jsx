import React from 'react'
import { NavLink } from 'react-router-dom';

const Rain = ({ weatherData }) => {
  
  const time = (weatherData.data?.forCast.current_weather.time);
  const current_time = time ? time.slice(0,13)+":00" : "";
  console.log(current_time);

  const index = weatherData.data?.forCast?.hourly?.time.indexOf(current_time);
  const rainAmount = weatherData.data?.forCast?.hourly?.rain[index];
  const rainProbability = weatherData.data?.forCast?.hourly?.precipitation_probability[index];
  const precipitation = weatherData.data?.forcast?.hourly?.precipitation[index];
  const humidity = weatherData.data?.forCast?.hourly?.relative_humidity_2m[index];
  return (
    <div className=' flex flex-col items-center align-middle'> 
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rain</title>
  <div className="w-full max-w-xl space-y-6">
    {/*Rain Result */}
    <div
      id="rainResult"
      className="space-y-4 bg-[#B9FF66] p-6 rounded-xl shadow-lg border border-[#191A23] text-black"
    >
      <div
        id="messageRain"
        className="text-3xl font-bold p-6 bg-[#191A23] text-white rounded-xl"
      >
        Rain Information
        {weatherData?.coord ? <span id="messageRainSpan" className="font-bold text-white"> for {weatherData.coord?.name} ,{weatherData.coord?.country}</span>:""}
      </div>
      <div id="rainAmount" className="text-2xl">
        Rain Amount: {" "}
        <span id="rainAmountSpan" className="font-bold text-[#191A23]"> {rainAmount}mm</span>
      </div>
      <div id="rainProbability" className="text-2xl">
        Rain Probability:{" "}
        <span id="rainProbSpan" className="font-bold text-[#191A23]"> {rainProbability}%</span>
      </div>
      <div id="precipitation" className="text-2xl">
        Precipitation: {" "}
        <span id="precipitationSpan" className="font-bold text-[#191A23]"> {precipitation}mm</span>
      </div>
      <div id="humidity" className="text-2xl">
        Humidity:{" "}
        <span id="humiditySpan" className="font-bold text-[#191A23]"> {humidity}%</span>
      </div>
    </div>
    {/* Navigation Buttons */}
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      <NavLink
        to="/"
        className="bg-[#191A23] text-white font-semibold px-6 py-3 rounded-xl border hover:bg-white hover:text-black transition"
      >
        ⬅️ Home
      </NavLink>
      <NavLink
        to="/temp"
        className="bg-[#B9FF66] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#a0e755] transition"
      >
        🌡️ Temperature
      </NavLink>
      <NavLink
        to="/wind"
        className="bg-[#B9FF66] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#a0e755] transition"
      >
        💨 Wind
      </NavLink>
      <NavLink
        to="/aqi"
        className="bg-[#B9FF66] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#a0e755] transition"
      >
        🌫️ AQI
      </NavLink>
    </div>
  </div>
</>

    </div>
  )
}

export default Rain