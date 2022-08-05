/** @format */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-blue-600 h-full flex justify-between">
      <div className="px-4 mt-6">
        <h1 className="text-3xl font-bold text-white ">coinbox</h1>
        <span className="text-white font-[700]">&copy; 2022</span>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
