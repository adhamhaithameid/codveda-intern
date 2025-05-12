import React, { useState, useEffect } from "react";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import {
  PlayIcon,
  PauseIcon,
  BackwardIcon as RewindIcon,
  ForwardIcon as FastForwardIcon,
  SpeakerWaveIcon,
  Cog6ToothIcon as CogIcon,
} from "@heroicons/react/24/solid";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePlaylist, setActivePlaylist] = useState("Recently Played");

  const glass =
    "backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg shadow-white/5";


  useEffect(() => {
    document.documentElement.style.setProperty(
      "--gradient-rotation",
      "linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6)"
    );
  }, []);

  return (
    <div className="flex flex-col h-screen text-zinc-200 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
      <header
        className={`relative z-30 flex items-center justify-between px-4 py-3 transition-all duration-300 ${glass} hover:shadow-xl hover:shadow-indigo-500/10`}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen((p) => !p)}
            className="p-2 -ml-2 rounded md:hidden hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? (
              <XIcon className="w-6 h-6 transition-transform hover:scale-110" />
            ) : (
              <MenuIcon className="w-6 h-6 transition-transform hover:scale-110" />
            )}
          </button>
          <span className="text-lg font-bold tracking-wide bg-[length:300%_300%] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient bg-clip-text text-transparent select-none">
            Aurora Beats
          </span>
        </div>

        <nav className="md:flex gap-8 text-sm font-medium">
          <a
            href="#"
            className="relative group hover:text-indigo-300 transition-colors"
          >
            Library
            <span className="absolute bottom-0 left-0 w-0 h-px bg-indigo-300 transition-all group-hover:w-full" />
          </a>
          <a
            href="#"
            className="relative group hover:text-indigo-300 transition-colors"
          >
            Search
            <span className="absolute bottom-0 left-0 w-0 h-px bg-indigo-300 transition-all group-hover:w-full" />
          </a>
        </nav>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } fixed inset-y-0 left-0 z-20 w-60 md:static shrink-0 transition-transform duration-300 ease-out ${glass} md:block`}
        >
          <div className="p-6 space-y-6 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent scrollbar-thumb-rounded-full">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Playlists
            </h2>
            <nav className="space-y-2 text-sm">
              {["Recently Played", "Favorites", "Top Hits", "Workout Mix", "Chill Vibes"].map((pl) => (
                <button
                  key={pl}
                  onClick={() => setActivePlaylist(pl)}
                  className={`block w-full text-left px-4 py-2 rounded transition-all ${
                    activePlaylist === pl
                      ? "bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-indigo-500/50"
                      : "hover:bg-white/20 active:bg-white/30"
                  }`}
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

        <main className="flex flex-1 overflow-hidden rounded-2xl">
          <section className="flex rounded-2xl flex-col flex-1 items-center justify-center gap-8 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
            <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-purple-700/40 to-indigo-600/40 rounded-2xl animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                alt="Album art"
                className="object-cover w-full h-full mix-blend-overlay rounded-2xl transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl" />
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
                Electric Dreams
              </h1>
              <p className="text-lg text-white/80">Synthwave Vibes</p>
            </div>

            <div className="w-full max-w-2xl flex items-center gap-4">
              <span className="text-xs tabular-nums text-white/70">1:23</span>
              <div className="relative flex-1 group">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-2 rounded-full appearance-none bg-white/20 cursor-pointer accent-indigo-400 transition-all hover:h-3"
                />
                <div className="absolute h-1 bg-indigo-400/30 top-1/2 -translate-y-1/2 left-0 rounded-full" />
              </div>
              <span className="text-xs tabular-nums text-white/70">4:56</span>
            </div>

            <div className="flex items-center gap-6">
              <RewindIcon className="w-10 h-10 cursor-pointer p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110" />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 bg-indigo-500 rounded-full shadow-lg hover:bg-indigo-400 transition-all hover:scale-110 active:scale-95"
              >
                {isPlaying ? (
                  <PauseIcon className="w-10 h-10" />
                ) : (
                  <PlayIcon className="w-10 h-10 pl-1" />
                )}
              </button>
              <FastForwardIcon className="w-10 h-10 cursor-pointer p-2 rounded-full hover:bg-white/20 transition-all hover:scale-110" />
            </div>
          </section>

          <aside
            className={`hidden lg:block w-80 shrink-0 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 ${glass}`}
          >
            <div className="p-6 space-y-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Up Next
              </h2>
              <ul className="space-y-4 text-sm">
                {Array.from({ length: 10 }).map((_, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 rounded-lg p-3 hover:bg-white/10 transition-transform duration-200 hover:-translate-y-0.5 group"
                  >
                    <div className="w-14 h-14 rounded-lg bg-white/20 animate-pulse" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">Neon Nights {i + 1}</p>
                      <p className="text-xs text-white/60 truncate">Synth Artist</p>
                    </div>
                    <span className="text-xs text-white/40 group-hover:text-white/60">
                      3:45
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </main>
      </div>

      <footer
        className={`relative z-20 flex items-center gap-4 px-4 py-3 ${glass}`}
      >
        <div className="w-14 h-14 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
            alt="Current track"
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="min-w-0 flex-1 hidden sm:block space-y-2">
          <div className="flex justify-between text-sm">
            <span>Electric Dreams</span>
            <span className="text-white/60">3:15</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-1 rounded-full appearance-none bg-white/30 cursor-pointer accent-indigo-400 hover:h-1.5 transition-all"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 group">
            <SpeakerWaveIcon className="w-6 h-6" />
            <input
              type="range"
              min="0"
              max="100"
              className="w-24 h-1 rounded-full appearance-none bg-white/30 cursor-pointer accent-indigo-400 transition-all hover:h-1.5"
            />
          </div>
          <CogIcon className="w-6 h-6 cursor-pointer hover:text-indigo-300 transition-transform hover:rotate-90" />
        </div>
      </footer>
    </div>
  );
}