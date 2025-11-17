"use client";
import React, { useState, useEffect, useCallback } from 'react';

const api_key = '4806250a67b3b02833a59aa050591e45';
const CITY = 'Ho Chi Minh City';
const REFRESH_INTERVAL = 15 * 60 * 1000; // 15 phút
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${api_key}&units=metric&lang=vi`;

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // data
  const [loading, setLoading] = useState(true); // load state
  const [error, setError] = useState(null);     // error state

  const fetchWeather = useCallback(async () => {
    console.log('Đang cập nhật thời tiết...');
    
    if (!weatherData) {
      setLoading(true);
    }
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Lỗi API: ${response.statusText}`);
      }
      const data = await response.json();
      
      setWeatherData(data);

    } catch (err : any) {
      console.error('Không thể lấy dữ liệu thời tiết:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [weatherData]);

  useEffect(() => {
    fetchWeather(); //first fetch

    const intervalId = setInterval(fetchWeather, REFRESH_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [fetchWeather]);
  //first load
  if (loading && !weatherData) {
    return (
        <div className="weather-widget">
            <p>Đang tải thời tiết...</p>
        </div>
    );
  }

  if (error) {
    return (
        <div className="weather-widget">
            <p>Không thể tải dữ liệu: {error}</p>
            <p>Vui lòng thử làm mới trang.</p>
        </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  const { name } = weatherData;
  const { temp } = weatherData.main;
  const { description, icon } = weatherData.weather[0];
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div className="api">
        <div id="weather-widget">
            <h3>Thời tiết tại {name}</h3>
            <img src={iconUrl} alt={description} />
            <p>{temp.toFixed(1)}°C</p>
            <p>{description}</p>
        </div>
      
    </div>
  );
}

export default WeatherWidget