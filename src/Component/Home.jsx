import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full h-[93%] border border-white p-4 flex flex-col justify-center items-center gap-4" >
            <h1 className="text-[#7499ff] mix-blend-difference backdrop-blur-xl p-4 rounded-2xl lg:text-7xl font-semibold text-center max-md:text-3xl max-sm:text-[30px]" > Your streaming guide for <br />  movies, TV shows & <br /> sports </h1>
            <p className="text-[#bdbdbd] text-center">Find where to stream new, popular & upcoming entertainment with JustWatch.</p>

        <button className="border-none bg-[#ffffff12] backdrop-blur-xl p-2 rounded-lg shadow-2xl shadow-[#ffe8e8] text-[#7499ff] cursor-pointer">Discove Movies & TV Shows</button>
      </div> 
    </>
  );
};

export default Home;
 