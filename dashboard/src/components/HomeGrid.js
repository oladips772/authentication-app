/** @format */
import React from "react";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import "../App.css"
import moment from "moment"

function HomeGrid() {
  return (
    <div className="grid_div ml-[60px]">
      <div className="flex items-center bg-black p-4 shadow-sm rounded-lg">
        <AssignmentIndOutlinedIcon className="text-white" />
        <div className="ml-4">
          <p className="text-lg text-white transform-uppercase">Total Users</p>
          <span className="font-bold text-gray-300">50,032</span>
        </div>
      </div>
      <div className="flex items-center bg-black p-4 shadow-sm rounded-lg">
        <AccountBalanceOutlinedIcon className="text-white" />
        <div className="ml-4">
          <p className="text-lg text-white">Total Payments</p>
          <span className="font-bold text-gray-300">50,032</span>
        </div>
      </div>{" "}
      <div className="flex items-center bg-black p-4 shadow-sm rounded-lg">
        <CurrencyExchangeOutlinedIcon className="text-white" />
        <div className="ml-4">
          <p className="text-lg text-white">Total Withdrawals</p>
          <span className="font-bold text-gray-300">50,032</span>
        </div>
      </div>
    </div>
  );
}

export default HomeGrid;
