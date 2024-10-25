import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="flex items-center justify-start w-full p-5">
        <Link to={"/"}>
          <img className="w-[120px]" src="./logo.svg" alt="" />
        </Link>
      </div>
    </>
  );
}
