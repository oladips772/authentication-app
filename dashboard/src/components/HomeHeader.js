/** @format */
import React from "react";
import moment from "moment";

function HomeHeader() {
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
  const date = new Date().toLocaleString();
  
  return (
    <div className="flex items-center justify-between bg-white p-5 ml-6 shadow-sm">
      <div className="">
        <h3 className="text-2xl font-bold">Welcome , {adminInfo?.name}</h3>
        <p className="text-gray-600">
          Here's what's happening in coinbox today.
        </p>
      </div>
      <span className="text-[16px] text-gray-900">
        {moment(date).format("MMMM Do YYYY")}
      </span>
    </div>
  );
}

export default HomeHeader;
