"use client";
import React, { useState, useEffect, useCallback } from 'react';

const API_KEY = 'q1fgTVohRuQ19vkVaHslFH9sIZ9ZgzsZ'; 
const BASE_CURRENCY = 'USD';
const TARGET_CURRENCY = 'VND';
const API_URL = `https://api.apilayer.com/currency_data/live?source=${BASE_CURRENCY}&currencies=${TARGET_CURRENCY}`;
const UPDATE_INTERVAL = 15 * 60 * 1000; // 15 phút

const headers = new Headers();
headers.append("apikey", API_KEY);

const requestOptions : RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: headers
};


function CurrencyDisplay() {
  const [rate, setRate] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExchangeRate = useCallback(async () => {
    console.log("Đang cập nhật tỉ giá...");
    setLoading(true); // Bắt đầu tải
    setError(null);   // Xóa lỗi cũ
    
    try {
      const response = await fetch(API_URL, requestOptions);

      if (!response.ok) {
        throw new Error(`Lỗi mạng: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setRate(data.quotes.USDVND);
        setLastUpdated(new Date(data.timestamp * 1000));
      } else {
        setError(data.error.info);
      }
    } catch (err) {
      console.error("Đã xảy ra lỗi khi gọi API:", err);
      setError("Không thể tải dữ liệu.");
    } finally {
      setLoading(false); // Kết thúc tải
    }
  }, []);

  useEffect(() => {
    fetchExchangeRate();

    // setup interval for auto-refresh
    const intervalId = setInterval(fetchExchangeRate, UPDATE_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [fetchExchangeRate]);

  const getDisplayContent = () => {
    if (loading && !rate) {
      return "Đang tải..."; // first load
    }
    if (loading && rate) {
      return "Đang cập nhật..."; // subsequent updates
    }
    if (error) {
      return `Lỗi: ${error}`;
    }
    if (rate) {
      return rate.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
      });
    }
    return "N/A";
  };

  return (
    <div className="api">

        <div className="converter-container">
        <h1>Tỉ giá USD - VND hiện tại</h1>
        <div className="rate-display">
            <span className="currency">1 USD</span>
            <span className="equals">=</span>
            <span className="currency" id="exchange-rate">
            {getDisplayContent()}
            </span>
        </div>
        <p className="last-updated" id="last-updated">
            {lastUpdated && `Cập nhật lần cuối: ${lastUpdated.toLocaleString('vi-VN')}`}
        </p>
        </div>
    </div>
  );
}

export default CurrencyDisplay;