"use client";

import { cities } from "@/lib/cities";

interface CitySelectorProps {
  selected: string;
  onChange: (name: string) => void;
}

export default function CitySelector({ selected, onChange }: CitySelectorProps) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      {cities.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
}
