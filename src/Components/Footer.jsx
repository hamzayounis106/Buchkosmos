import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="bottom-0 flex flex-col items-center justify-center gap-5 py-4 ">
        <div className="flex flex-col justify-between  gap-5 w-[90%] ">
          <Link to={"/"}>
            <img className="w-[120px]" src="./logo.svg" alt="" />
          </Link>
          <ul className="flex Rajdhani items-start font-medium justify-start gap-5 p-0 list-none text-[#0D0842] ">
            <li>
              <a target="_blank" href="https://buchkosmos.de/public/contact#">
                Kontakt
              </a>
            </li>
            <li>
              <a target="_blank" href="https://buchkosmos.de/public/about">
                Impressum
              </a>
            </li>
            <li>
              <a target="_blank" href="https://buchkosmos.de/public/privacy">
                Datenschutzerklärung
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#fafafa] w-full flex justify-center items-center py-2">
        <p className="font-medium Rajdhani text-[#0D0842]">
          Buchkosmos.de@copyright 2024
        </p>
      </div>
    </>
  );
}
