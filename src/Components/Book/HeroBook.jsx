import React from "react";

export default function HeroBook() {
  return (
    <>
      <div className="relative flex items-center justify-center w-full py-16 text-white">
        <img
          src="./Hero_bg.png"
          className="absolute object-cover w-full h-full z-[100]"
          alt=""
        />
        <div className="flex justify-center items-center flex-col  gap-5 w-[80%]   z-[200]">
          <p className="text-4xl font-bold text-center uppercase Rajdhani">
            Kulturwandel in Organisationen: Ein Baukasten für angewandte
            Psychologie im Change-Management
          </p>
          <p className="Poppins text-[20px] font-normal">Svea von Hehn</p>
          <p className="Poppins text-[20px] font-normal">$42.05</p>{" "}
          <div className="flex flex-row justify-start gap-2 ">
            <div className="flex justify-center gap-1 ">
              <img
                draggable={false}
                src="./recomended/star_orange.svg"
                className="w-[13px]"
                alt=""
              />
              <img
                draggable={false}
                src="./recomended/star_orange.svg"
                className="w-[13px]"
                alt=""
              />
              <img
                draggable={false}
                src="./recomended/star_orange.svg"
                className="w-[13px]"
                alt=""
              />
              <img
                draggable={false}
                src="./recomended/star_orange.svg"
                className="w-[13px]"
                alt=""
              />
              <img
                draggable={false}
                src="./recomended/star_orange.svg"
                className="w-[13px]"
                alt=""
              />
            </div>
            <p className="Rajdhani  capitalize text-[16px]">(1,988)</p>
          </div>
        </div>
      </div>{" "}
      <div className="h-[30px]"></div>
      <div className="px-9">
        <div className="bg-[#DDDDDD] capitalize py-1 px-5 text-base rounded-[50px]">
          <strong>Sub Category</strong> IT & Technologie
        </div>
      </div>
    </>
  );
}
