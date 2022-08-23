/** @format */
import { useState } from "react";
import { motion } from "framer-motion";

function VerfiyPage() {
  const [token, setToken] = useState("");
  const userName = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="max-w-[520px] w-full border-0 h-[380px] p-[20px] rounded-lg md:border lg:border md:border-slate-300 lg:border-slate-300">
        <h1 className="text-center font-[600] text-[30px]">Dear Oladipupo</h1>
        <p className="font-[600]">
          A verfication email has been sent to{" "}
          <span className="font-[700] text-lg">oladips200@gmail.com</span>,
          please verify your account with the four digit verfication code sent.
        </p>
        <input
          placeholder="****"
          maxLength={4}
          type="text"
          className="h-[45px] w-full outline-none border-slate-200 border mt-8 rounded-md text-center flex bg-gray-200 font-bold text-[28px] items-center justify-center placeholder:text-gray-500 "
        />
        <button className="mt-8 w-full text-white bg-blue-600 rounded-[30px] font-[700] h-[43px]">
          Verify
        </button>
        <h1 className="text-[28px] text-blue-700 text-center mt-10 font-[700]">capicoin</h1>
      </div>
    </div>
  );
}

export default VerfiyPage;
