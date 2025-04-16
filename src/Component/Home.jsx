import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full h-full border p-4 mix-blend-difference backdrop-blur-sm  flex flex-col justify-center items-center gap-4" >
            <h1 className="text-[#7499ff] p-4 rounded-2xl lg:text-7xl font-semibold text-center max-md:text-3xl max-sm:text-[30px]" > Your Streaming Guide For <br />  Movies, TV Shows & <br /> Sports. </h1>
            <p className="text-[#bdbdbd] text-center">Find where to stream new, popular & upcoming entertainment with JustWatch.</p>

        <button className="bg-[#e9e9e9] backdrop-blur-xl border border-white p-2 rounded-lg shadow-2xl shadow-[#ffe8e8] text-[#4576ff] hover:bg-[#4576ff] hover:text-white transition-colors duration-200 ease-in-out cursor-pointer">Discover Movies & TV Shows</button>
      </div>
    </>
  );
};

export default Home;
 