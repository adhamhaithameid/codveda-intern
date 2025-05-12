import React, { useState } from "react";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import {
  PlayIcon,
  BackwardIcon as RewindIcon,
  ForwardIcon as FastForwardIcon,
  SpeakerWaveIcon,
  Cog6ToothIcon as CogIcon,
} from "@heroicons/react/24/solid";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const glass =
    "backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg shadow-white/5";

  return (
    <div className="flex flex-col h-screen text-zinc-200 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden dark:text-zinc-200">
      <header
        className={`relative z-30 flex items-center justify-between px-4 py-3 ${glass}`}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen((p) => !p)}
            className="p-2 -ml-2 rounded md:hidden hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
          <span className="text-lg font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 select-none">
            Aurora Beats
          </span>
        </div>

        <nav className=" md:flex gap-8 text-sm font-medium align-center text-center justify-center self-center justify-self-center">
          <a href="#" className="hover:text-indigo-300 transition-colors mr-3">
            Library
          </a>
          <a href="#" className="hover:text-indigo-300 transition-colors">
            Search
          </a>
        </nav>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } fixed inset-y-0 left-0 z-20 w-60 md:static shrink-0 transition-transform duration-200 ease-out ${glass} md:block`}
        >
          <div className="p-6 space-y-6 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Playlists
            </h2>
            <nav className="space-y-2 text-sm">
              {["Recently Played", "Favorites", "Top Hits", "Workout Mix", "Chill Vibes"].map((pl) => (
                <button
                  key={pl}
                  className="block w-full text-left px-4 py-2 rounded hover:bg-white/20 active:bg-white/30 transition"
                >
                  {pl}
                </button>
              ))}
            </nav>
          </div>
        </aside>
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-10 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}

        <main className="flex flex-1 overflow-hidden">
          <section className="flex flex-col flex-1 items-center justify-center gap-8 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
            <div className="relative w-60 h-60 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-purple-700/40 to-indigo-600/40" />
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=60"
                alt="Album art placeholder"
                className="object-cover w-full h-full mix-blend-overlay"
              />
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-semibold">Track Title</h1>
              <p className="text-sm text-white/70">Artist Name</p>
            </div>

            <div className="w-full max-w-lg flex items-center gap-3">
              <span className="text-xs tabular-nums">0:42</span>
              <input
                type="range"
                min="0"
                max="100"
                className="flex-1 h-1 rounded-full appearance-none bg-white/30 cursor-pointer accent-indigo-400"
              />
              <span className="text-xs tabular-nums">3:15</span>
            </div>

            <div className="flex items-center gap-8">
              <RewindIcon className="w-8 h-8 cursor-pointer hover:text-indigo-300 transition" />
              <PlayIcon className="w-14 h-14 cursor-pointer hover:text-indigo-400 transition" />
              <FastForwardIcon className="w-8 h-8 cursor-pointer hover:text-indigo-300 transition" />
            </div>
          </section>

          <aside
            className={`hidden lg:block w-72 shrink-0 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 ${glass}`}
          >
            <div className="p-6 space-y-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Up Next
              </h2>
              <ul className="space-y-4 text-sm">
                {Array.from({ length: 10 }).map((_, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 rounded p-3 hover:bg-white/10 transition"
                  >
                    <div className="w-12 h-12 rounded bg-white/20" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate">Song {i + 1}</p>
                      <p className="text-xs text-white/60 truncate">Artist {i + 1}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </main>
      </div>

      <footer
        className={`relative z-20 flex items-center gap-6 px-4 py-3 backdrop-saturate-150 ${glass}`}
      >
        <div className="w-12 h-12 rounded bg-white/20 overflow-hidden" />
        <div className="min-w-0 flex-1 hidden sm:block">
          <p className="truncate text-sm font-medium">Song Title – Artist</p>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full mt-1 h-1 rounded-full appearance-none bg-white/30 cursor-pointer accent-indigo-400"
          />
        </div>
        <div className="flex items-center gap-3">
          <SpeakerWaveIcon className="w-5 h-5" />
          <input
            type="range"
            min="0"
            max="100"
            className="w-28 h-1 rounded-full appearance-none bg-white/30 cursor-pointer accent-indigo-400"
          />
        </div>
        <CogIcon className="hidden sm:block w-6 h-6 cursor-pointer hover:text-indigo-300" />
      </footer>
    </div>
  );
}

if (typeof window !== "undefined") {
  document.documentElement.style.setProperty("--tw-ring-color", "#818cf8");
}
