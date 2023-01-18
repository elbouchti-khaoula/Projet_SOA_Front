import "../Pages/Home.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { COLORS } from "./colors";




function TopBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { isDark } = useApp();

  

  
  return (
    <div className="stories py-2 sticky flex items-center justify-between w-full top-0">
      
      <div className="tablet:w-2/3 w-full flex  items-center justify-between pl-8">
        <div className="flex items-center">
          <img className="w-[30px]" src={logo} alt="" />
          <h1
            className={`text-xl ml-2 hidden five:flex justify-center w-full font-bold ${
              isDark ? "text-slate-100" : "text-black"
            }`}
          >
            <p>Agro</p> <span style={{color:COLORS.myGreen}}>Dig</span>
          </h1>
        </div>

       
        {/* )} */}
      </div>
    </div>
  );
}
export default TopBar;


