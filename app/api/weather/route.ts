import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "Latitude e longitude são obrigatórias" }, { status: 400 });
  }

  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,relative_humidity_2m,wind_speed_10m` +
    `&hourly=temperature_2m` +
    `&forecast_days=1` +
    `&timezone=America/Sao_Paulo`;

  const res = await fetch(url);
  const data = await res.json();

  const hourly = data.hourly.time.map((time: string, i: number) => ({
    time: time.slice(11, 16), // pega só "HH:MM"
    temperature: data.hourly.temperature_2m[i],
  }));

  return NextResponse.json({
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    hourly,
  });
}
