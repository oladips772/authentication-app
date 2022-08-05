/** @format */
import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-auto sm:max-w-[500px] md:max-w-[900px] lg:max-w-[1100px] bg-white">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
