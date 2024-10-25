import React from "react";
import HeroBook from "../Components/Book/HeroBook";
import BodyText from "../Components/Book/BodyText";


export default function Book() {
  return (
    <div className="flex flex-col items-start justify-start gap-5 py-4">
     
      <HeroBook />
      <div className="h-[30px]"></div>
    <BodyText />
    </div>
  );
}
