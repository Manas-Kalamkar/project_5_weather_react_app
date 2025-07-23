import React from 'react'
import { NavLink } from 'react-router-dom';

const Aqi = ({ weatherData }) => {

  const time = weatherData.data?.forCast.current_weather.time
  const currentTime = time?time.slice(0,13) + ":00":"";
  const indx = weatherData.data?.aqi.hourly.time.indexOf(currentTime);

  const pm25 = weatherData.data?.aqi.hourly.pm2_5[indx];
  const pm10 = weatherData.data?.aqi.hourly.pm10[indx];
  let aqiDesc = '';

    if(pm25<30){aqiDesc= "Air quality is Good ✅";
    }else if(pm25<60){aqiDesc ="Moderate air quality ⚠️";
  }else{aqiDesc = "Unhealthy air ❗";}
  if(indx != -1){
    //checks the quality on the pm25 value
    }
  return (
    <div className=' flex flex-col items-center align-middle'>
        <>
  
  <title>Air Quality Index (AQI)</title>
  <div className="w-full mt-24 max-w-xl space-y-6">
    {/* AQI Info Card */}
    <div
      id="aqiResult"
      className="space-y-4 bg-[#191A23] p-6 rounded-xl shadow-lg border border-[#B9FF66]"
    >
      <div
        id="messageAqi"
        className="text-3xl font-bold p-6 bg-[#B9FF66] rounded-xl text-black"
      >
        AQI { weatherData?.coord ? <span id="messageAqiSpan" className="text-black font-bold"> for {weatherData.coord?.name} ,{weatherData.coord?.country}</span>:""}
      </div>
      <div id="pm25" className="text-2xl text-white">
        PM2.5: <span id="pm25Span" className="font-bold text-[#B9FF66]"> {pm25}µg/m³</span>
      </div>
      <div id="pm10" className="text-2xl text-white">
        PM10: <span id="pm10Span" className="font-bold text-[#B9FF66]"> {pm10}µg/m³</span>
      </div>
      <div id="aqiDesc" className="text-2xl text-white">
        AQI Status <span id="aqiStatus" className="font-bold text-[#B9FF66]">{aqiDesc}</span>
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
        to="/wind"
        className="bg-[#191A23] border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
      >
        💨 Wind
      </NavLink>
      <NavLink
        to="/rain"
        className="bg-[#191A23] border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
      >
        🌧️ Rain
      </NavLink>
    </div>
  </div>
</>

    </div>
  )
}

export default Aqi