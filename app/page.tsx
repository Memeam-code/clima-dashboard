"use client";

import { useState, useEffect } from "react";
import { Cloud, Thermometer, Droplets, Wind } from "lucide-react";
import { cities } from "@/lib/cities";
import WeatherCard from "@/components/WeatherCard";
import TemperatureChart from "@/components/TemperatureChart";
import CitySelector from "@/components/CitySelector";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  hourly: { time: string; temperature: number }[];
}

export default function Home() {
  const [selectedCityName, setSelectedCityName] = useState("São Luís");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const selectedCity = cities.find((c) => c.name === selectedCityName) || cities[0];

  useEffect(() => {
    setLoading(true);
    fetch(`/api/weather?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      });
  }, [selectedCity.latitude, selectedCity.longitude]);

  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Cloud className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Dashboard Meteorológico
            </h1>
          </div>
          <CitySelector selected={selectedCityName} onChange={setSelectedCityName} />
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <WeatherCard
                title="Temperatura"
                value={`${weather?.temperature}°C`}
                icon={<Thermometer className="h-4 w-4" />}
                temperature={weather?.temperature}
              />
              <WeatherCard
                title="Umidade"
                value={`${weather?.humidity}%`}
                icon={<Droplets className="h-4 w-4" />}
                temperature={weather?.temperature}
              />
              <WeatherCard
                title="Vento"
                value={`${weather?.windSpeed} km/h`}
                icon={<Wind className="h-4 w-4" />}
                temperature={weather?.temperature}
              />
            </>
          )}
        </div>

        {/* Gráfico */}
        {loading ? (
          <div className="h-80 rounded-2xl bg-white border border-gray-200 animate-pulse" />
        ) : (
          <TemperatureChart
            data={weather?.hourly || []}
            cityName={selectedCityName}
          />
        )}
      </div>
    </main>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 animate-pulse h-24" />
  );
}
