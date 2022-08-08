/** @format */
import React from "react";

function DetailLoader() {
  return (
    <div>
      <div className="mt-[60px]">
        <div className=" max-w-[1070px] mx-auto mb-8">
          <div className="hover:shadow-md border-md mx-2 h-full animate-pulse">
            <div className="h-[400px] bg-slate-200 p-2"></div>
            <h1 className="text-[25px] mb-2 font-[700] p-2 h-8 w-full mt-6 bg-slate-200 "></h1>
            <div className="flex items-center text-gray-600 font-[600] mt-2">
              <p className="h-8 bg-slate-200 w-[200px]"> </p>{" "}
              <span className="ml-8 h-8 w-[120px] bg-slate-200 "></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailLoader;
