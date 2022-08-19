/** @format */
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

function Sidebar() {
  const status = navigator.onLine;
  const [systemStatus, setSystemStatus] = useState(status);
  const navigate = useNavigate("");

  function LOGOUT() {
    localStorage.removeItem("adminInfo");
    navigate("/Login");
  }

  useEffect(() => {
    setSystemStatus(status);
  }, [status]);

  return (
    <div className="h-[100vh] bg-[#060606] w-[220px] fixed sidebar">
      <div className="text-center justify-center img_div">
        <img
          src="https://ethereum.org/static/c48a5f760c34dfadcf05a208dab137cc/d1ef9/eth-diamond-rainbow.png"
          className="object-contain ml-2 mt-4 h-20 w-20"
          alt=""
        />
        <p className="text-white text-[12px] font-bold -mt-6 -ml-6">COINBOX</p>
      </div>
      <div className="mt-6">
        <div className="my-4">
          <NavLink
            to="/"
            className="flex items-center"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "darkgray",
                borderLeft: isActive ? "solid 4px white" : "",
              };
            }}
          >
            <GridViewOutlinedIcon className="mx-4 text-lg" />
            <p className="text-[12px] font-semibold">DASHBOARD</p>
          </NavLink>
        </div>
        <div className="my-4">
          <NavLink
            to="/Users"
            className="flex items-center"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "darkgray",
                borderLeft: isActive ? "solid 4px white" : "",
              };
            }}
          >
            <AssignmentIndOutlinedIcon className="mx-4 text-lg" />
            <p className="text-[12px] font-semibold">USERS</p>
          </NavLink>
        </div>
        <div className="my-4">
          <NavLink
            to="/Payment-Reciepts"
            className="flex items-center"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "darkgray",
                borderLeft: isActive ? "solid 4px white" : "",
              };
            }}
          >
            <AccountBalanceOutlinedIcon className="mx-4 text-lg" />
            <p className="text-[12px] font-semibold">PAYMENT RECIEPTS</p>
          </NavLink>
        </div>
        <div className="my-4">
          <NavLink
            to="/Withdrawals"
            className="flex items-center"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "darkgray",
                borderLeft: isActive ? "solid 4px white" : "",
              };
            }}
          >
            <CurrencyExchangeOutlinedIcon className="mx-4 text-lg" />
            <p className="text-[12px] font-semibold">WITHDRAWALS</p>
          </NavLink>
        </div>
        <div className="my-4">
          <NavLink
            to="/Create-Contents"
            className="flex items-center"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "darkgray",
                borderLeft: isActive ? "solid 4px white" : "",
              };
            }}
          >
            <DriveFileRenameOutlineOutlinedIcon className="mx-4 text-lg" />
            <p className="text-[12px] font-semibold">CREATE CONTENTS</p>
          </NavLink>
        </div>
        <div className="my-4">
          <NavLink
            to="/Contents"
            className="flex items-center"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "darkgray",
                borderLeft: isActive ? "solid 4px white" : "",
              };
            }}
          >
            <LibraryBooksOutlinedIcon className="mx-4 text-lg" />
            <p className="text-[12px] font-semibold">CONTENTS</p>
          </NavLink>
        </div>
        <div className="my-4">
          <NavLink
            to="/Testimonials"
            className="flex items-center"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "darkgray",
                borderLeft: isActive ? "solid 4px white" : "",
              };
            }}
          >
            <LibraryBooksOutlinedIcon className="mx-4 text-lg" />
            <p className="text-[12px] font-semibold">TESTIMONIALS</p>
          </NavLink>
        </div>
        <div className="my-4">
          <NavLink
            to="/Admin"
            className="flex items-center"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "darkgray",
                borderLeft: isActive ? "solid 4px white" : "",
              };
            }}
          >
            <AdminPanelSettingsOutlinedIcon className="mx-4 text-lg" />
            <p className="text-[12px] font-semibold">ADMIN</p>
          </NavLink>
        </div>
      </div>
      {/*  */}
      <div
        className="absolute bottom-10 flex items-center mx-2 cursor-pointer"
        onClick={LOGOUT}
      >
        <LogoutIcon className="rotate-180 text-white mr-2 text-sm" />
        <p className="text-white text-sm font-semibold">LOG OUT</p>
      </div>
      <div className="absolute bottom-2 flex items-center mx-2">
        <p className="text-white text-[10px] font-bold">SYSTEM STATUS : </p>
        <span
          className={`h-2 w-2 rounded-full ml-4 ${
            systemStatus ? "bg-green-400" : "bg-red-600"
          }`}
        ></span>
        <span
          className={` ml-1 text-[10px] font-bold ${
            systemStatus ? "text-green-400" : "text-red-500"
          }`}
        >
          {`${systemStatus ? "ONLINE" : "OFFLINE"}`}
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
