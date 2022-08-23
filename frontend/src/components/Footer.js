/** @format */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-blue-900 h-full flex flex-col items-center md:flex-row lg:flex-row justify-around pb-6 mt-[55px]">
      <div className="px-4 mt-6 mb-8">
        <h1 className="text-2xl font-bold text-white ">capicoin</h1>
        <span className="text-white font-[400] text-sm">
          Copyright &copy; 2022 CapitalCoin All rights reserved.
        </span>
      </div>
      <div className="flex items-center space-x-4 mr-8">
        <Link to="/about" className="text-white font-[600]">
          About
        </Link>
        <Link to="/plans" className="text-white font-[600]">
          Plans
        </Link>
        <Link to="/blogs" className="text-white font-[600]">
          Blogs
        </Link>
        <Link to="/contact" className="text-white font-[600]">
          Contact
        </Link>
      </div> 
    </div>
  );
}

export default Footer;
