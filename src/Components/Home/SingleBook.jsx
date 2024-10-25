import React from "react";

export default function SingleBook() {
  return (
    <>
      <div className=" items-stretch w-[33%] text-[#343434CC] flex  justify-start gap-5 p-2 ">
        <div className="w-[45%]">
          <img
            src="./recomended/reco_1.png"
            className="w-full"
            alt="bookName"
          />
        </div>
        <div className="flex flex-col justify-between w-[55%] ">
          <p className="Rajdhani  capitalize text-[25px] font-semibold">
            all the light we cannot see
          </p>
          <p className="Rajdhani font-semibold capitalize text-[16px]">
            by anthony doerr
          </p>
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
          <p className="Rajdhani   text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi
            eleifend 
          </p>
        </div>
      </div>
    </>
  );
}
