import React from "react";

import SingleRecomendedBook from "./SingleRecomendedBook";

export default function RecomendedSection() {
  const recommendedBooks = [
    {
      img: "./recomended/reco_1.png",
      bookName: "Tentang kamu",
      author: "tere liye",
      rating: 2.4,
    },
    {
      img: "./recomended/reco_2.png",
      bookName: "Pergi",
      author: "tere liye",
      rating: 4.4,
    },
    {
      img: "./recomended/reco_3.png",
      bookName: "garis waktu",
      author: "Fiersa besari",
      rating: 4.4,
    },
    {
      img: "./recomended/reco_4.png",
      bookName: "Becoming",
      author: "Miechelle obama",
      rating: 4.4,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 py-4">
        <div className="w-[92%]">
          <h2 className="text-3xl text-[#343434] font-semibold text-left Rajdhani ">
            Recommended
          </h2>
          <div className="h-[40px]"></div>

          <div className="flex items-start justify-between w-full gap-4">
            {recommendedBooks.map((book, index) => {
              return (
                <SingleRecomendedBook
                  key={index}
                  img={book.img}
                  author={book.author}
                  rating={book.rating}
                  bookName={book.bookName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
