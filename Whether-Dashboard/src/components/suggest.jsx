import React from 'react';
import { IoSunny, IoCloudy, IoRainy } from 'react-icons/io5';

export default function Suggest() {
  const cities = [
    {
      country: 'China',
      city: 'Beijing',
      weather: 'Cloudy',
      icon: <IoCloudy className="w-10 h-10 text-white" />
    },
    {
      country: 'US',
      city: 'California',
      weather: 'Windy',
      icon: <IoCloudy className="w-10 h-10 text-white" />
    },
    {
      country: 'Arab Emirates',
      city: 'Abu Dhabi',
      weather: 'Mostly Sunny',
      icon: <IoSunny className="w-10 h-10 text-white" />
    },
    {
      country: 'Canada',
      city: 'Ottawa',
      weather: 'Light Snow Shower',
      icon: <IoRainy className="w-10 h-10 text-white" />
    },
  ];

  return (
    <div className="absolute bottom-5 right-14">
      {/* Title */}
      <h2 className="text-xl font-semibold text-white mb-4">Other Cities</h2>

      {/* City cards */}
      <div className="space-y-4">
        {cities.map(({ country, city, weather, icon }) => (
          <div
            key={city}
            className="flex items-center justify-between bg-button_dark rounded-2xl p-4 w-64 h-24 duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase text-third_text">{country}</p>
              <p className="text-lg font-medium text-white">{city}</p>
              <p className="text-sm text-secondary_text">{weather}</p>
            </div>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
