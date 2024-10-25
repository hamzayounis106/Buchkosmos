import React from "react";

export default function SingleCategory({ id, categoryName }) {
  return (
    <div id={id} className="bg-[#DDDDDD] capitalize py-1 px-5 text-base rounded-[50px]">
      {categoryName}
    </div>
  );
}
