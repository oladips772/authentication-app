/** @format */
import React from "react";

function Plans() {
  return (
    <div className="bg-white rounded-sm shadow-md ml-[60px] mt-6 w-[900px] p-4 flex items-center flex-col">
      <h2 className="text-3xl p-2 text-center mb-4">Plans on Coinbox</h2>
      <div className="flex items-center">
        <div className="flex flex-col items-center text-white bg-pink-600 justify-center p-2 h-[300px] rounded-sm">
          <h4 className="text-lg font-bold">Starter Plan</h4>
          <h1 className="text-3xl font-bold">$100 - $25,000</h1>
          <p className="font-bold">10% weekly</p>
        </div>
        <div className="flex flex-col items-center text-white bg-purple-600 justify-center p-2 h-[390px] rounded-sm">
          <h4 className="text-lg font-bold">Gold Plan</h4>
          <h1 className="text-3xl font-bold">$5000 - $100,000</h1>
          <p className="font-bold">15% weekly</p>
        </div>{" "}
        <div className="flex flex-col items-center text-white bg-pink-600 justify-center p-2 h-[300px] rounded-sm">
          <h4 className="text-lg font-bold">Silver Plan</h4>
          <h1 className="text-3xl font-bold">$1000 - $30,000</h1>
          <p className="font-bold">12% weekly</p>
        </div>
      </div>
    </div>
  );
}

export default Plans;
