import React from "react";

export default function Hero() {
  return (
    <>
      <div className="relative flex items-center justify-center w-full py-10">
        <img
          src="./Hero_bg.png"
          className="absolute object-cover w-full h-full z-[100]"
          alt=""
        />
        <div className="flex justify-between  gap-5 w-[93%]   z-[200]">
          <div className="flex items-center justify-center w-1/2">
            <p className="text-xl font-semibold text-white Rajdhani">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <img src="./hero_side_books.png" className="w-[400px]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
