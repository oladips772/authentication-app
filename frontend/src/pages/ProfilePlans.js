/** @format */
import React from "react";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/ProfileNav";

function ProfilePlans() {
  return (
    <div>
      <Navbar />
      <div className="mt-[100px] max-w-[1070px] p-2 mx-auto">
        <ProfileNav />
        <div className="mt-6">
          <h3 className="text-2xl text-gray-600">Oladips200@gmail.com</h3>
          <p className="text-gray-700">Your Plans / Investments</p>
        </div>
              <div>
                  
        </div>
      </div>
    </div>
  );
}   

export default ProfilePlans;
