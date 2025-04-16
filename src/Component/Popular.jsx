import React from "react";

const popularItems = [
  {
    title: "Breaking Bad",
    category: "TV Show",
    rating: "9.5/10",
  },
  {
    title: "Inception",
    category: "Movie",
    rating: "8.8/10",
  },
  {
    title: "Stranger Things",
    category: "TV Show",
    rating: "8.7/10",
  },
  {
    title: "Interstellar",
    category: "Movie",
    rating: "8.6/10",
  },
];

const Popular = () => {
  return (
    <div className="w-full h-full border p-4 backdrop-blur-sm flex flex-col justify-center items-center gap-8">
      <h2 className="text-[#7499ff] lg:text-5xl text-3xl font-bold text-center">
        ⭐ Popular Picks
      </h2>
      <p className="text-[#bdbdbd] text-center max-w-2xl">
        These titles are ruling the charts and capturing attention worldwide. Dive into the most popular content today.
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {popularItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border border-[#2d2d2d] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl text-white font-semibold">{item.title}</h3>
            <p className="text-sm text-[#9ca3af]">{item.category}</p>
            <span className="text-xs text-[#ffd700] mt-2 inline-block">
              ⭐ {item.rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
