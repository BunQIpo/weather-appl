"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [Forecast, setForecast] = useState({});

  const fetchForcast = async () => {
    try {
      const res = await axios.get("api/weather");

      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data:", error.message);
    }
  };

  useEffect(() => {
    fetchForcast();
  }, []);
  return (
    <GlobalContext.Provider value={{ Forecast }}>
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};
export const useGlobalcontext = () => useContext(GlobalContext);
export const useGlobalcontextUpdate = () => useContext(GlobalContextUpdate);
