import React, { forwardRef } from "react";
import Card from "./Card";
import tempAnimation from "../assets/animations/temp.json"
import rainAnimation from "../assets/animations/rain.json"
import windAnimation from "../assets/animations/wind.json"
import aqiAnimation from "../assets/animations/aqii.json"

const Cards  = forwardRef(({ weatherData,learnMoreOption },cardRef)=>{

    const time = (weatherData.data?.forCast?.current_weather?.time);
    const currentTime = time ? time.slice(0,13)+":00":null;
    
    const indx = weatherData.data?.forCast?.hourly?.time.indexOf(currentTime);
    let indx2 = weatherData.data?.aqi?.hourly?.pm2_5.indexOf(currentTime);

    if(indx2 === -1 && weatherData.data?.aqi?.hourly?.time.length > 0){
        const now = new Date(currentTime);
        const hourlyTime = weatherData.data?.forCast.hourly.time.map(t=>new Date(t))
        
        let closestDifference = Infinity;
        let closerTime = -1;

        hourlyTime.forEach((hourDate,i)=>{
            const diff = Math.abs(hourDate-now);
            if(diff<closestDifference){
                closestDifference = diff;
                closerTime = i ;
                indx2 = i;
            }
        })
    }

    const temp = weatherData.data?.forCast?.current_weather?.temperature;
    const windSpeed = weatherData.data?.forCast?.current_weather?.windspeed
    const rainProbability = weatherData.data?.forCast?.hourly?.precipitation_probability[indx];
    const aqi = weatherData.data?.aqi?.hourly?.pm2_5[indx2];
    return (< >
        <div ref={cardRef} className="items-center flex-row text-center lg:text-start mx-2">
            <h1 className="m-10 text-3xl lg:text-5xl lg:ml-16 font-bold ">Weather {weatherData?.coord ?  <span>for{` ${weatherData.coord?.name}, ${weatherData.coord?.country}`}</span>:""}</h1>
            <div id="cards" className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:m-16">
                <Card title="Temperature" value={temp} unit="°C" animation={tempAnimation} learnmore="temp" learnMoreOption={learnMoreOption} />
                <Card title="Wind Speed" value={windSpeed} unit="mph" animation={rainAnimation} learnmore="wind" learnMoreOption={learnMoreOption} />
                <Card title="Rain Probability" value={rainProbability} unit="%" animation={windAnimation} learnmore="rain" learnMoreOption={learnMoreOption} />
                <Card title="Aqi" value={aqi} unit="µg/m³" animation={aqiAnimation} learnmore="aqi" learnMoreOption={learnMoreOption} />
            </div>

        </div>
        
    </>
    )
}
)
export default Cards