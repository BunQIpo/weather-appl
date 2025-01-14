"use client";
import { useGlobalcontext } from '@/app/context/globalcontext';
import { clearSky, cloudy, drizzleIcon, rain, snow } from '@/app/utils/icons';
import { kelvinToCelsius } from '@/app/utils/misc';
import React, { useState } from 'react'

function Temperature() {
    const {Forecast } = useGlobalcontext();

    const {main,timezone , name ,weather} = Forecast;

    if (!Forecast || !weather) {
        return <div>Loading...</div>;
    }
    const temp = kelvinToCelsius(main?.temp);
    const minTemp = kelvinToCelsius(main?.temp_min);
    const maxTemp = kelvinToCelsius(main?.temp_max);
    const [localTime, setLocakTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");

    const {main:weatherMain , description} = weather[0];


    const getIcon = () => {
        switch (weatherMain) {
            case "Drizzle":
                return drizzleIcon;
            case "Rain" :
                return rain ;
            case "Snow":
                return snow;
            case "Clear":
                return clearSky;
            case "Clouds":
                return cloudy;
            default:
                return clearSky;

        }
    }
    return (<div className = "pt-6 pb-5 border rounded-lg flex flex-col justify-bewteen dark:bg-dark-grey shadow-sm dark:shadow-none">
         <p className='flex justify-between items-center'>
         <span className='font-medium'>{currentDay}</span>
         <span className='font-medium'>{localTime}</span>
         </p>
    </div>
    )
}

export default Temperature;