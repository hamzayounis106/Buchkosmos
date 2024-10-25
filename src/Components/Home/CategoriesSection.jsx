import React, { useContext } from "react";
import SingleCategory from "./SingleCategory";
import { FictionCategoriesContext } from "../../App";
export default function CategoriesSection() {
const fictionCategories = useContext(FictionCategoriesContext)
// console.log(fictionCategories)
  const nonFiction = [
    { id: 848, category: "Literatur & Romane allgemein", currentBookAmount: 7 },
    { id: 837, category: "Science Fiction & Fantasy", currentBookAmount: 29 },
    { id: 838, category: "Krimis, Thriller & Mystery", currentBookAmount: 20 },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 py-4">
        <div className="w-[92%]">
          <h2 className="text-3xl text-[#343434] font-semibold text-left Rajdhani ">
            Fiction
          </h2>
          <div className="h-[20px]"></div>
          <div className="flex flex-wrap items-start justify-start w-full gap-2 gap-y-3">
            {fictionCategories &&
              fictionCategories.map((category, index) => {
                return (
                  <SingleCategory
                    key={index}
                    id={category.id}
                    categoryName={category.text}
                  />
                );
              })}
          </div>
        </div>{" "}
        <div className="h-[30px]"></div>
        <div className="w-[92%]">
          <h2 className="text-3xl text-[#343434] font-semibold text-left Rajdhani ">
            Non-Fiction
          </h2>
          <div className="h-[20px]"></div>
          <div className="flex flex-wrap items-start justify-start w-full gap-2 gap-y-3">
            {nonFiction.map((category, index) => {
              return (
                <SingleCategory
                  key={index}
                  id={category.id}
                  categoryName={category.category}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
