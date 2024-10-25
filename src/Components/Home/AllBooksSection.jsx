import React from "react";
import SingleBook from "./SingleBook";

export default function AllBooksSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 py-4">
        <div className="w-[92%]">
          <h2 className="text-3xl text-[#343434] font-semibold text-left Rajdhani ">
            All Books
          </h2>
          <div className="h-[40px]"></div>
   
        </div>
        <div className="flex items-start justify-between w-[95%] gap-8">
            <SingleBook />
            <SingleBook />
            <SingleBook />
          </div>
      </div>
    </>
  );
}
