import React, { Fragment } from "react";
import Main from "../main/Main";

import { FaHandPointer } from "react-icons/fa";

const Header = () => {
  return (
    <Fragment>
      <div className="h-full font-sans bg-blue-600">
        <div className="relative w-auto px-2 m-auto leading-none text-center text-white top-28">
          <h1 className="text-4xl font-bold">
            Imagine what we will accomplish together
          </h1>
        </div> 
        <div className="relative w-auto px-2 m-auto text-base text-center text-white top-40">
          <p>
            Powerful analytics tools for your business. See the exact keywords
            for which your competitors rank in organic search and the amount of
            traffic driven by each of them.
          </p>
        </div>
        <div className="flex items-center justify-center  space-x-2.5 mt-48">
          <button className="btn btn-error"><FaHandPointer className="w-5 mb-1 mr-1"/>Start Trail</button>
          <button className="px-4 py-3 mr-1 text-sm font-semibold text-center text-gray-700 uppercase transition duration-100 ease-in-out bg-white border rounded-md cursor-pointer border-gray-50">
            Quick demo
          </button>
        </div>

        <img
          className="relative z-10 top-20"
          src="https://demo.themesberg.com/rocket/assets/img/index-mockup.png"
          alt="laptop"
        /> 
      </div>

      <div className="relative w-screen -top-14">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="5"
            d="M0,96L18.5,112C36.9,128,74,160,111,181.3C147.7,203,185,213,222,229.3C258.5,245,295,267,332,250.7C369.2,235,406,181,443,144C480,107,517,85,554,106.7C590.8,128,628,192,665,186.7C701.5,181,738,107,775,117.3C812.3,128,849,224,886,224C923.1,224,960,128,997,74.7C1033.8,21,1071,11,1108,48C1144.6,85,1182,171,1218,176C1255.4,181,1292,107,1329,69.3C1366.2,32,1403,32,1422,32L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
          ></path>
        </svg>
      </div> 

       <Main />
    </Fragment>
  );
};
 
export default Header  ;
