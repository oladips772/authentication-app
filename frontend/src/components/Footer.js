/** @format */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-blue-900 h-full flex flex-col md:flex lg:flex items-center justify-around pb-6 mt-4">
      <div className="px-4 mt-6 mb-8">
        <h1 className="text-2xl font-bold text-white ">coinbox</h1>
        <span className="text-white font-[400] text-sm">
          Copyright &copy; 2022 Coinbox All rights reserved.
        </span>
      </div>
      <div className="flex items-center space-x-4 mr-8">
        <Link to="/" className="text-white font-[600]">
          About
        </Link>
        <Link to="/" className="text-white font-[600]">
          Blogs
        </Link>
        <Link to="/" className="text-white font-[600]">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Footer;
