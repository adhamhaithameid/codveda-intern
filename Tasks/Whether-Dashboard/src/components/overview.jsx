import React from 'react';

function Overview() {
  // ← 1) add your sample data (replace with real values)
  const windData = [2, 3, 4, 6, 7, 8, 10, 12, 13, 11, 9, 8, 7, 5, 3];
  const max = Math.max(...windData);

  return (
    <div className="bg-background">
    {/* Title */}
      <div className="flex absolute top-7 left-5">
        <div className="relative ml-5 top-72 items-center justify-center flex">
          <span className="text-base text-secondary_text font-medium">
            Today's Overview
          </span>
        </div>
      </div>

    {/* Wind Status Card */}
    <div className="absolute bg-button_dark ml-8  bottom-60 rounded-2xl p-4 text-white w-64 h-52">
        <div className="absolute top-4 left-4 w-56">
            <span className="text-base font-medium">Wind Status</span>
        </div>

        <div className="absolute top-14 left-4 right-4 h-20 flex items-end justify-between space-x-0">
            {windData.map((val, i) => (
            <div
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-button_dark to-[#fff]"
              style={{ height: `${(val / max) * 100}%` }}
            />
            ))}
        </div>

        <div className="absolute flex bottom-4 left-4 text-3xl font-semibold">
            7.50
            <span className="relative text-sm ml-1 mt-4">km/h</span>
        </div>
        <div className="absolute flex bottom-4 right-4 text-sm text-secondary_text">
            6:20 AM
        </div>
    </div>

    {/* Wind Status Card */}

    </div>
  );
}

export default Overview;
