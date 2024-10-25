import React, { useEffect, useState } from "react";

export default function SingleRecomendedBook({
  img,
  bookName,
  author,
  rating,
}) {
  const [orangeStars, setOrangeStars] = useState(Math.round(rating));

  const [grayStars, setGrayStars] = useState(Math.round(5 - rating));

  useEffect(() => {
    setOrangeStars(Math.round(rating));
    setGrayStars(Math.round(5 - rating));
  }, [rating]);
  return (
    <>
      <div className="flex flex-col items-stretch flex-1 gap-1 justify-stretch ">
       <div>
       <img
          draggable={false}
          src={img}
          className="w-[180px] shadow-xl shad shadow-[#6b6b6b] "
          alt=""
        />
        <div className="h-[30px]"></div>
       </div>
        <div className="flex flex-col gap-1 pl-1">       
          <p className="Poppins text-[#343434] text-lg capitalize">{bookName}</p>
          <p className="font-medium text-[#343434] capitalize text-base">
            {author}
          </p>{" "}
          <div className="h-[10px]"></div>
          <div className="flex items-start justify-start gap-1">
          {orangeStars &&
            [...Array(orangeStars)].map((_, index) => (
              <img
                key={`orange-${index}`}
                draggable={false}
                src="./recomended/star_orange.svg"
                className="w-[13px]"
                alt=""
              />
            ))}
          {grayStars &&
            [...Array(grayStars)].map((_, index) => (
              <img
                key={`gray-${index}`}
                draggable={false}
                src="./recomended/star_gray.svg"
                className="w-[13px]"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
