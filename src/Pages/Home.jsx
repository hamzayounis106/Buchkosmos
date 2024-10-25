import React from "react";
import Hero from "../Components/Home/Hero";
import RecomendedSection from "../Components/Home/RecomendedSection";
import CategoriesSection from "../Components/Home/CategoriesSection";
import FitlerSection from "../Components/Home/FitlerSection";
import AllBooksSection from "../Components/Home/AllBooksSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="h-[30px]"></div>
      <RecomendedSection />
      <div className="h-[30px]"></div>
      <CategoriesSection />
      <div className="h-[30px]"></div>
      <FitlerSection />
      <div className="h-[30px]"></div>
      <AllBooksSection />
      <div className="h-[30px]"></div>
    </div>
  );
}
