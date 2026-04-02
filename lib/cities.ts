export interface City {
  name: string;
  latitude: number;
  longitude: number;
}

export const cities: City[] = [
  { name: "São Luís",       latitude: -2.53,  longitude: -44.28 },
  { name: "São Paulo",      latitude: -23.55, longitude: -46.63 },
  { name: "Rio de Janeiro", latitude: -22.91, longitude: -43.17 },
  { name: "Brasília",       latitude: -15.79, longitude: -47.88 },
  { name: "Salvador",       latitude: -12.97, longitude: -38.51 },
  { name: "Fortaleza",      latitude: -3.72,  longitude: -38.53 },
  { name: "Manaus",         latitude: -3.12,  longitude: -60.02 },
  { name: "Curitiba",       latitude: -25.43, longitude: -49.27 },
  { name: "Recife",         latitude: -8.05,  longitude: -34.87 },
  { name: "Porto Alegre",   latitude: -30.03, longitude: -51.23 },
];
