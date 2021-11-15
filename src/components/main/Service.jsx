import React from 'react'
import { FaHandPointer, FaPoll, FaFileInvoiceDollar, FaDiscourse} from "react-icons/fa";

const Service = () => {
  return (
    <div className="mt-48 font-sans bg-blue-700">
      <h5 className="pt-10 pl-5 text-xl text-gray-300">Customer service</h5>
      <h1 className="pt-4 pl-5 text-2xl font-extrabold text-white">Discover effortless customer support</h1>
      <p className="pt-6 pl-5 text-gray-300">Convert your emails into tickets and keep them all organized in one place. Never leave customers' questions unanswered.</p>

      <button className="mt-5 ml-5 btn btn-error">View more</button>
      
      <div className="w-full px-4 pb-8 mt-10">
        <div className="px-4 py-12 mb-6 text-center text-blue-800 bg-white rounded-md">
          <FaHandPointer className="w-12 h-12 m-auto"/>
          <h5 className="mt-5 mb-3 text-xl font-medium leading-6">Customer service</h5>
          <p>Create low-effort customer service experiences.</p>
        </div>
        <div className="px-4 py-12 mb-6 text-center text-blue-800 bg-white rounded-md">
          <FaPoll className="w-12 h-12 m-auto"/>
          <h5 className="mt-5 mb-3 text-xl font-medium leading-6">Predictive service</h5>
          <p>Drive revenue and offset costs in engagement centers</p>
        </div>
        <div className="px-4 py-12 mb-6 text-center text-blue-800 bg-white rounded-md">
          <FaFileInvoiceDollar className="w-12 h-12 m-auto"/>
          <h5 className="mt-5 mb-3 text-xl font-medium leading-6">Service to sales</h5>
          <p>Drive revenue and offset costs in engagement centers</p>
        </div>
        <div className="px-4 py-12 mb-6 text-center text-blue-800 bg-white rounded-md">
          <FaDiscourse className="w-12 h-12 m-auto"/>
          <h5 className="mt-5 mb-3 text-xl font-medium leading-6">Make it simple</h5>
          <p>Drive revenue and offset costs in engagement centers</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Service  