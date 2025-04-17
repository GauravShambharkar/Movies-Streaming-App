import React, { useEffect, useState } from "react";

const Trending = () => {
  const trendingItems = [
    {
      title: "Oppenheimer",
      category: "Movie",
      status: "Now Streaming",
    },
    {
      title: "The Last of Us",
      category: "TV Show",
      status: "Season 1 Available",
    },
    {
      title: "F1: Drive to Survive",
      category: "Documentary",
      status: "New Season Out",
    },
    {
      title: "Avatar: The Way of Water",
      category: "Movie",
      status: "Available in 4K",
    },
  ];

  // const [showTrend, setShowTrend] = useState([]);

  function renderTrending() {
    const displayData = axios.create(`/trending/all/day`);
    // setShowTrend(displayData)
    console.log(displayData);
  }

  useEffect(() => {
    // renderTrending();
  }, []);

  return (
    <div className="w-full  border backdrop-blur-sm py-2 flex flex-col border-white justify-center items-center gap-8 ">
      <div
        className="banner py-2 text-white border-white w-250 rounded-2xl h-120 mt-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, #000000 , rgba(0,0,0,0.10), rgba(0, 0, 0, 0)), url('https://www.onoticiado.com.br/wp-content/uploads/2023/05/oppenheimer-novo-trailer-univers.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <h2 className="text-[#7499ff] lg:text-5xl text-3xl font-bold text-center">
        Trending Now
      </h2>
      <p className="text-[#bdbdbd] text-center max-w-2xl">
        Discover what’s hot and trending across your favorite streaming
        platforms. Hand-picked and updated regularly.
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {trendingItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border border-[#2d2d2d] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl text-white font-semibold">{item.title}</h3>
            <p className="text-sm text-[#9ca3af]">{item.category}</p>
            <span className="text-xs text-[#4576ff] mt-2 inline-block">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
