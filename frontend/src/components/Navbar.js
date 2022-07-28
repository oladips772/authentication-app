/** @format */
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      className={`${
        !showNav
          ? "bg-white h-[60px] w-full shadow-md flex items-center justify-between md:justify-around lg:justify-around fixed top-0 z-10"
          : "flex-col items-center space-y-2 bg-white h-[100%] shadow-md"
      } `}
    >
      {/* logo and icon div */}
      <div
        className={`${
          !showNav
            ? "ml-4 flex justify-between mx-4 items-center w-full md:w-[100px] lg:w-[100px]"
            : "flex justify-between items-center p-[14px]"
        }`}
      >
        {/* <img src={logo} className="h-40 w-40 resize-contain" alt="" /> */}
        <h3 className="text-3xl text-blue-900 font-[500]">coinbox</h3>
        <div className="flex md:hidden lg:hidden mr-4">
          {showNav ? (
            <CloseIcon
              className="cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            />
          ) : (
            <MenuIcon
              className="cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            />
          )}
        </div>
      </div>
      {/* links div */}
      <div
        className={`${
          !showNav
            ? "items-center space-x-4 hidden md:flex lg:flex"
            : "flex flex-col items-start space-y-4 w-[100%] pb-2"
        }`}
      >
        <Link
          to="/"
          className={` ${
            !showNav
              ? "font-[600] mx-4 hover:text-blue-600"
              : "border-b border-slate-200 font-[600] mx-4 hover:text-blue-600 w-[96%] pb-1"
          }`}
        >
          About
        </Link>
        <Link
          to="/"
          className={` ${
            !showNav
              ? "font-[600] mx-4 hover:text-blue-600"
              : "border-b border-slate-200 font-[600] mx-4 hover:text-blue-600 w-[96%] pb-1"
          }`}
        >
          Plans
        </Link>
        <Link
          to="/"
          className={` ${
            !showNav
              ? "font-[600] mx-4 hover:text-blue-600"
              : "border-b border-slate-200 font-[600] mx-4 hover:text-blue-600 w-[96%] pb-1"
          }`}
        >
          Blogs
        </Link>
        <Link
          to="/"
          className={` ${
            !showNav
              ? "font-[600] mx-4 hover:text-blue-600"
              : "border-b border-slate-200 font-[600] mx-4 hover:text-blue-600 w-[96%] pb-1"
          }`}
        >
          Contact
        </Link>
      </div>
      {/* actions */}
      <div
        className={`${
          !showNav
            ? "items-center space-x-4 hidden md:flex lg:flex"
            : "flex flex-col items-start space-y-4 pb-2 space-x-4 mt-4"
        }`}
      >
        <Link
          to="/"
          className={` ${
            !showNav
              ? "font-[600] mx-4"
              : "font-[600] mx-4 p-[8px] border-2 border-blue-600 rounded-[4px] text-center max-w-[290px] w-full"
          }  `}
        >
          Sign in
        </Link>
        <Link
          to="/"
          className={`${
            !showNav
              ? "font-[600] bg-blue-700 text-white p-[8px] rounded-[4px]"
              : "font-[500] bg-blue-700 text-white p-[8px] rounded-[4px] text-center max-w-[290px] w-full"
          }`}
        >
          Get started
        </Link>
      </div>
      {/* icons div */}
    </nav>
  );
}

export default Navbar;
