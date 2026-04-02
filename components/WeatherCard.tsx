interface WeatherCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  temperature?: number;
}

function getBorderColor(temp?: number): string {
  if (temp === undefined) return "border-gray-300";
  if (temp < 15) return "border-blue-500";
  if (temp <= 25) return "border-green-500";
  if (temp <= 35) return "border-orange-500";
  return "border-red-500";
}

function getBgColor(temp?: number): string {
  if (temp === undefined) return "bg-gray-50";
  if (temp < 15) return "bg-blue-50";
  if (temp <= 25) return "bg-green-50";
  if (temp <= 35) return "bg-orange-50";
  return "bg-red-50";
}

export default function WeatherCard({ title, value, icon, temperature }: WeatherCardProps) {
  return (
    <div className={`rounded-2xl border-l-4 p-5 shadow-sm ${getBorderColor(temperature)} ${getBgColor(temperature)}`}>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        {icon}
        {title}
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
