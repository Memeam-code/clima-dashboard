"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  time: string;
  temperature: number;
}

interface TemperatureChartProps {
  data: DataPoint[];
  cityName: string;
}

export default function TemperatureChart({ data, cityName }: TemperatureChartProps) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
      <h2 className="text-base font-semibold text-gray-700 mb-4">
        Temperatura nas últimas 24h — {cityName}
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="time" tick={{ fontSize: 11 }} interval={2} />
          <YAxis unit="°C" tick={{ fontSize: 11 }} />
          <Tooltip formatter={(v: number) => [`${v}°C`, "Temperatura"]} />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#f97316"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
