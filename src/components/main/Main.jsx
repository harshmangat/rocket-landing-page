import React from "react";
import { BsShieldShaded } from "react-icons/bs";
import { FaRocket, FaHeadset } from "react-icons/fa";
import Service from "./Service";

const Main = () => {
  return (
    <>
      <div className="w-auto mt-10 font-sans text-2xl font-extrabold leading-none text-center">
        <h2>Meet our intuitive platform</h2>
      </div>
      <div className="w-auto mt-8 text-center">
        <p className="text-gray-600 ">
          Self-Service Analytics or ad hoc reporting gives users the ability to
          develop rapid reports, empowering users to analyze their data.
        </p>
      </div>
      <div>
            {/* Analyze your data  */}
        <div className="flex items-center w-20 h-20 m-auto mt-16 bg-indigo-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-12 m-auto"
            fill="blue"
            viewBox="0 0 24 24"
            stroke="blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>
        </div>
        <div className="w-auto px-3 m-auto mt-5 text-center">
          <h3 className="text-xl font-semibold">Analyze your data</h3>
          <p className="relative text-gray-600 top-4">
            Create reports with an easy to use drag-and drop cards.
          </p>

          <a
            className="relative text-blue-700 cursor-pointer top-8"
            href="https://www.learnmore.com"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative w-5 h-5 -top-5 left-56"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        
       {/*Collabnorate securely   */}
        <div className="flex items-center w-20 h-20 m-auto mt-16 bg-indigo-200 rounded-full">
          
          <BsShieldShaded className="m-auto text-blue-700 h-9 w-9"/>
        </div>
        <div className="w-auto px-3 m-auto mt-5 text-center">
          <h3 className="text-xl font-semibold">Collaborate securely</h3>
          <p className="relative text-gray-600 top-4">
          Share or publish your reports with your teammates.
          </p>

          <a
            className="relative text-blue-700 cursor-pointer top-8"
            href="https://www.learnmore.com"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative w-5 h-5 -top-5 left-56"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
 
          {/* Features released regularly */}
        <div className="flex items-center w-20 h-20 m-auto mt-16 bg-indigo-200 rounded-full">
          <FaRocket className="m-auto text-blue-700 h-9 w-9"/>
        </div>
        <div className="w-auto px-3 m-auto mt-5 text-center">
          <h3 className="text-xl font-semibold">Features released regularly</h3>
          <p className="relative text-gray-600 top-4">
          Create reports with an easy to use drag-and drop cards.
          </p>

          <a
            className="relative text-blue-700 cursor-pointer top-8"
            href="https://www.learnmore.com"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative w-5 h-5 -top-5 left-56"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* 24/7 support */}
        <div className="flex items-center w-20 h-20 m-auto mt-16 bg-indigo-200 rounded-full">
         <FaHeadset className="m-auto text-blue-700 h-9 w-9"/>
        </div>
        <div className="w-auto px-3 m-auto mt-5 text-center">
          <h3 className="text-xl font-semibold">24/7 support</h3>
          <p className="relative text-gray-600 top-4">
          Our support team is a quick chat or email away — 24 hours a day.
          </p>

          <a
            className="relative text-blue-700 cursor-pointer top-8"
            href="https://www.learnmore.com"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative w-5 h-5 -top-5 left-56"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <img className="relative w-11/12 m-auto rounded-md shadow-md top-24" src="https://demo.themesberg.com/rocket/assets/img/saas-platform.png"/>
      
      <Service />
    </>
  );
};



export default Main;
