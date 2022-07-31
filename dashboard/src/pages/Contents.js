/** @format */
import React from "react";
import Sidebar from "../components/Sidebar";

function Contents() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[240px]">
        <input type="file" />
        <h1>contents</h1>
      </div>
    </div>
  );
}

export default Contents;
