import React from "react";

const CardBuffering = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item,id) => {
        return (
          <div key={id} className="hover:scale-101 w-full h-70 flex flex-col justify-between gap-2 rounded-2xl border border-[#ffffff] bg-[#1e1e1e] p-4 shadow-lg transition-transform duration-200">
            {/* top of the card */}
            <div className="top space-y-2">
              <h3 className="h-35 w-full rounded bg-[#484848] text-[#484848]">
                .
              </h3>
              <h3 className="h-2 w-20 rounded bg-[#484848] text-[#484848]">
                .
              </h3>
              <p className="w-50 h-2 rounded bg-[#484848] text-[#484848]">.</p>
              <p className="w-50 h-2 rounded bg-[#484848] text-[#484848]">.</p>
              <h5 className="h-2 w-28 rounded bg-[#484848] text-[#484848]"></h5>
            </div>
            {/* bottom card content*/}
            <div className="space-y-2">
              <p className="w-50 h-2 rounded bg-[#484848] text-[#484848]">.</p>
              <h5 className="h-2 w-8 rounded bg-[#484848] text-[#484848]"></h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardBuffering;
