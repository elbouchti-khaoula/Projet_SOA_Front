import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Pages/Home.css";
import "../App.css";
import "boxicons";
import {
  BiUser,
  BiHome
} from "react-icons/bi";

function Nav({ active }) {
  const [width, setWidth] = useState(0);
 
  const navigate = useNavigate();



  useEffect(() => {
  
  }, []);

  return (
    <>
      <div 
        className={`z-[19]  min-w-[200px]
      duration-500 tab:h-[92vh] tab:py-4 shadow-inner tab:w-fit w-full flex tab:flex-col justify-between ${
        isDark
          ? "bg-[#08021d] border-r-2 border-r-slate-200/20"
          : "bg-[#eff3f9] border-r-2 "
      }`}
      >
        <div
          className={`flex tab:flex-col w-full items-center px-0 ${
            isDark ? "text-slate-100" : "text-black"
          }`}
        >
          <Link
            style={{ width: mobile ? width / 5 : "100%" }}
            
            to="/"
            className={`${
              active === "home" &&
              " text-green-700 tab:border-l-[3px] border-b-[3px border-green-700"
            }
         flex cursor-pointer tab:mt-3 mx-auto items-center tab:flex-row flex-col tab:flex-row flex-col tab:w-full p-2 hover:text-green-700`}
          >
            <BiHome className="text-xl" />
            <p className="tab:ml-3 text-[0.7em] tab:text-base">Home</p>
          </Link>

          <Link
            style={{ width: mobile ? width / 5 : "100%" }}
            to="/profile"
            className={`${
              active === "profile" &&
              "text-green-700 tab:border-l-[3px] border-b-[3px border-green-700"
            }
        flex cursor-pointer tab:mt-3 mx-auto items-center tab:flex-row flex-col tab:w-full p-2 hover:text-green-700`}
          >
            <BiUser className="text-xl" />
            <p className="tab:ml-3 text-[0.7em] tab:text-base">Profile</p>
          </Link>
         
        </div>
        
      </div>
    </>
  );
}

export default Nav;