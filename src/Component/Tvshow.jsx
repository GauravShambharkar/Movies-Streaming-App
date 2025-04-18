import React from "react";

const tvShows = [
  {
    title: "The Mandalorian",
    genre: "Sci-Fi / Action",
    seasons: "3 Seasons",
  },
  {
    title: "Wednesday",
    genre: "Mystery / Comedy",
    seasons: "1 Season",
  },
  {
    title: "The Boys",
    genre: "Superhero / Action",
    seasons: "4 Seasons",
  },
  {
    title: "Peaky Blinders",
    genre: "Crime / Drama",
    seasons: "6 Seasons",
  },
];

const TvShows = () => {
  return (
    <div className="w-full h-full border p-4 backdrop-blur-sm flex flex-col justify-center items-center gap-8">
      <h2 className="text-[#f7ff66] lg:text-5xl text-3xl font-bold text-center">
        📺 Top TV Shows
      </h2>
      <p className="text-[#bdbdbd] text-center max-w-2xl">
        Binge-worthy TV shows you can’t miss — trending now across major platforms.
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {tvShows.map((show, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border border-[#2d2d2d] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl text-white font-semibold">{show.title}</h3>
            <p className="text-sm text-[#9ca3af]">{show.genre}</p>
            <span className="text-xs text-[#38bdf8] mt-2 inline-block">
              {show.seasons}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShows;
