import React from "react";

const movieList = [
  {
    title: "John Wick 4",
    genre: "Action",
    release: "2023",
  },
  {
    title: "The Batman",
    genre: "Superhero",
    release: "2022",
  },
  {
    title: "Top Gun: Maverick",
    genre: "Drama/Action",
    release: "2022",
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "Superhero",
    release: "2021",
  },
];

const Movies = () => {
  return (
    <div className="w-full h-full border p-4 backdrop-blur-sm flex flex-col justify-center items-center gap-8">
      <h2 className="text-[#7499ff] lg:text-5xl text-3xl font-bold text-center">
        🎬 Featured Movies
      </h2>
      <p className="text-[#bdbdbd] text-center max-w-2xl">
        Explore our curated selection of trending and top-rated movies. All in one place for your streaming needs.
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {movieList.map((movie, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border border-[#2d2d2d] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl text-white font-semibold">{movie.title}</h3>
            <p className="text-sm text-[#9ca3af]">{movie.genre}</p>
            <span className="text-xs text-[#4fd1c5] mt-2 inline-block">
              Released: {movie.release}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
