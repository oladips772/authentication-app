/** @format */
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: 0 },
  };

  return (
    <nav
      className={`${
        !showNav
          ? "bg-white h-[60px] w-full shadow-sm border-b border-slate-200 flex items-center justify-between md:justify-around lg:justify-around fixed top-0 z-10"
          : "flex-col items-center space-y-2 bg-white h-[100%] shadow-sm border-b border-slate-300  fixed top-0 z-10 w-[100%]"
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
        <Link to="/" className="text-[34px] text-blue-900 font-[700]">
          coinbox
        </Link>
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
      <motion.div
        animate={showNav ? "open" : "closed"}
        variants={variants}
        className={`${
          !showNav
            ? "items-center space-x-4 hidden md:flex lg:flex"
            : "flex flex-col items-start space-y-4 w-[100%] pb-2"
        }`}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "rgb(37 99 235)" : "black",
            };
          }}
          to="/about"
          className={` ${
            !showNav
              ? "font-[500] mx-1 text-[18px] hover:text-blue-600"
              : "border-b border-slate-200 font-[500] mx-4 hover:text-blue-600 w-[96%] pb-1"
          }`}
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "rgb(37 99 235)" : "black",
            };
          }}
          to="/plans"
          className={` ${
            !showNav
              ? "font-[500] mx-4 text-[18px] hover:text-blue-600"
              : "border-b border-slate-200 font-[500] mx-4 hover:text-blue-600 w-[96%] pb-1"
          }`}
        >
          Plans
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "rgb(37 99 235)" : "black",
            };
          }}
          to="/coinbox_blogs"
          className={` ${
            !showNav
              ? "font-[500] mx-4 text-[18px] hover:text-blue-600"
              : "border-b border-slate-200 font-[500] mx-4 hover:text-blue-600 w-[96%] pb-1"
          }`}
        >
          Blogs
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "rgb(37 99 235)" : "black",
            };
          }}
          to="/contact"
          className={` ${
            !showNav
              ? "font-[500] mx-4 text-[18px] hover:text-blue-600"
              : "border-b border-slate-200 font-[500] mx-4 hover:text-blue-600 w-[96%] pb-1"
          }`}
        >
          Contact
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "rgb(37 99 235)" : "black",
            };
          }}
          to="/my_profile"
          className={` ${
            !showNav
              ? "font-[500] mx-4 text-[18px] hover:text-blue-600"
              : "border-b border-slate-200 font-[500] mx-4 hover:text-blue-600 w-[96%] pb-1"
          }`}
        >
          My Profile
        </NavLink>
      </motion.div>
      {/* actions */}
      <motion.div
        animate={showNav ? "open" : "closed"}
        variants={variants}
        className={`${
          !showNav
            ? "items-center space-x-4 hidden md:flex lg:flex"
            : "flex flex-col items-start space-y-4 pb-2 space-x-4 mt-4"
        }`}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "rgb(37 99 235)" : "black",
            };
          }}
          to="/login"
          className={` ${
            !showNav
              ? "font-[500] mx-4 text-[18px]"
              : "font-[500] mx-4 p-[8px] border-2 border-blue-600 rounded-[4px] text-center max-w-[290px] w-full"
          }  `}
        >
          Sign in
        </NavLink>
        <Link
          to="/signup"
          className={`${
            !showNav
              ? "font-[500] bg-blue-700 text-white h-[38px] p-[2px] text-[18px] w-[100px] flex justify-center items-center rounded-[4px]"
              : "font-[500] bg-blue-700 text-white p-[8px] rounded-[4px] text-center max-w-[290px] w-full"
          }`}
        >
          Get started
        </Link>
      </motion.div>
      {/* icons div */}
    </nav>
  );
}

export default Navbar;
