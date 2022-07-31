/** @format */
import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-auto sm:max-w-[500px] md:max-w-[900px] lg:max-w-[1100px]">
        <Main />
      </div>
    </div>
  );
}

export default Home;
