/** @format */
import React from "react";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/ProfileNav";

function MyWithdrawals() {
  return (
    <div>
      <Navbar />
      <div className="mt-[100px] max-w-[1070px] p-2 mx-auto">
        <ProfileNav />
      </div>
    </div>
  );
}

export default MyWithdrawals;
