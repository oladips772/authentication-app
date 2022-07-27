/** @format */
import React from "react";
import HomeGrid from "../components/HomeGrid";
import HomeHeader from "../components/HomeHeader";
import Plans from "../components/Plans";
import Sidebar from "../components/Sidebar";
import UserList from "../components/UserList";

function HomePage() {
  return (
    <div classNAME="flex">
      <Sidebar />
      <div className="ml-[200px]">
        <HomeHeader />
        <HomeGrid />
        <Plans />
        <UserList />
      </div>
    </div>
  );
}

export default HomePage;
