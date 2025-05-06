import React from 'react';
import { IoSunny, IoCloudy, IoRainy } from 'react-icons/io5';

export default function ForecastStripUI() {
  // sample static data
  const today = {
    time: '11:45 AM',
    temp: 16,
    icon: <IoSunny className="w-12 h-12" />,
    feels: 18,
    humidity: 42,
    sunrise: '6:10 AM',
    sunset: '7:30 PM',
  };

  const nextDays = [
    { day: 'Sat', temp: 10, icon: <IoRainy className="w-10 h-10 mx-auto" /> },
    { day: 'Sun', temp: 15, icon: <IoCloudy className="w-10 h-10 mx-auto" /> },
    { day: 'Mon', temp: 14, icon: <IoSunny className="w-10 h-10 mx-auto" /> },
    { day: 'Tue', temp: 12, icon: <IoRainy className="w-10 h-10 mx-auto" /> },
    { day: 'Wed', temp: 17, icon: <IoSunny className="w-10 h-10 mx-auto" /> },
    { day: 'Thu', temp: 13, icon: <IoCloudy className="w-10 h-10 mx-auto" /> }
  ];

  return (
    <div className="absolute ml-4 top-32 overflow-x-auto px-4 pb-4  bg-background">
      <div className="flex space-x-8">
        {/* ── Today Card ── */}
        <div className="min-w-[220px] bg-button_dark rounded-2xl p-4 text-white flex-shrink-0">
          <div className="text-sm justify-self-end">{today.time}</div>
          <div className="-mt-6 text-4xl font-semibold">{today.temp}°</div>
          <div className="justify-self-end">{today.icon}</div>
          <div className="-mt-10 space-y-1 text-sm">
            <div>Real Feel: {today.feels}°</div>
            <div>Humidity: {today.humidity}%</div>
            <div>Sunrise: {today.sunrise}</div>
            <div>Sunset: {today.sunset}</div>
          </div>
        </div>

        {/* ── Next 6 Days ── */}
        {nextDays.map((d) => (
          <div
            key={d.day}
            className="min-w-[100px] bg-button_dark rounded-2xl p-4 text-white flex-shrink-0 text-center"
          >
            <div className="text-sm">{d.day}</div>
            <div className="mt-5">{d.icon}</div>
            <div className="mt-5 text-xl font-medium">{d.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}
