import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full h-full border p-4 mix-blend-difference backdrop-blur-sm  flex flex-col justify-center items-center gap-4" >
            <h1 className="text-[#7499ff] p-4 rounded-2xl lg:text-7xl font-semibold text-center max-md:text-3xl max-sm:text-[30px]" > Your streaming guide for <br />  movies, TV shows & <br /> sports </h1>
            <p className="text-[#bdbdbd] text-center">Find where to stream new, popular & upcoming entertainment with JustWatch.</p>

        <button className="bg-[#7499ff] backdrop-blur-xl border border-white p-2 rounded-lg shadow-2xl shadow-[#ffe8e8] text-[#ffffff] cursor-pointer">Discove Movies & TV Shows</button>
      </div>
    </>
  );
};

export default Home;
 