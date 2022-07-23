/** @format */
import React from "react";
import Sidebar from "../components/Sidebar";

function AdminsPage() {
  return (
    <div>
      <Sidebar />
      <div className="ml-[230px] ">
        <div className="p-2 bg-white shadow-md">
          <h1 className="text-3xl">Welcome Admin.</h1>
          <p className="text-gray-600">You can update passwords here..</p>
        </div>
        <div className="mt-8 flex flex-col bg-white p-4 items-center w-[60%]">
          <input
            type="text"
            placeholder="new password"
            className="w-[660px] outline-none border border-gray-600 h-10 p-2 mb-2 rounded-md"
          />
          <input
            type="text"
            placeholder="confirm password"
            className="w-[660px] outline-none border border-gray-600 h-10 p-2 rounded-md"
          />
          <button className="bg-black text-white text-sm rounded-sm w-[660px] h-10 mt-4 font-[500]">
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminsPage;
