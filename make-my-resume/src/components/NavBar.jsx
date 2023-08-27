import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmallNav from "./SmallNav";

const NavBar = () => {
  const [smallNav, setSmallNav] = useState(false);

  const handleClick = () => {
    if (smallNav === false) {
      setSmallNav(true);
    } else {
      setSmallNav(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center h-20 bg-nav p-4">
        <div className="flex justify-between items-center">
          <p className="ml-2 text-3xl max-lg:text-2xl font-medium text-white">
            make
            <span className="font-bold text-3xl max-lg:text-2xl text-amber-300">
              MY
            </span>
            resume
          </p>
        </div>
        <div className="flex text-white font-medium text-xl">
          <Link
            to={"/"}
            className="cursor-pointer max-lg:hidden mr-20 hover:border-b-2 hover:border-amber-300"
          >
            Home
          </Link>
          <Link
            to={"/build"}
            className="cursor-pointer max-lg:hidden mr-20 hover:border-b-2 hover:border-amber-300"
          >
            Build
          </Link>
          <Link
            to={"/history"}
            className="cursor-pointer max-lg:hidden mr-16 hover:border-b-2 hover:border-amber-300"
          >
            History
          </Link>
        </div>

        <div onClick={handleClick} className="lg:hidden cursor-pointer">
          <div className="w-7 h-0.5 bg-white mt-2"></div>
          <div className="w-7 h-0.5 bg-white mt-2"></div>
          <div className="w-7 h-0.5 bg-white mt-2"></div>
        </div>
      </div>
      <div>{smallNav && <SmallNav />}</div>
    </div>
  );
};

export default NavBar;
