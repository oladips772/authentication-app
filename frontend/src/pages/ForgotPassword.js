/** @format */
import { useState } from "react";
import { motion } from "framer-motion";

function ForgotPassword() {
  const [token, setToken] = useState("");
  const userName = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="max-w-[520px] w-full border-0 h-[360px] p-[20px] rounded-lg md:border lg:border md:border-slate-300 lg:border-slate-300">
        <h1 className="text-center font-[600] text-[30px] text-blue-700 mb-2">Forgot password?</h1>
        <p className="font-[600]">
          Forgot your password ? enter your email address so we can email you a
          reset password link.
        </p>
        <input
          placeholder="your email address"
          type="text"
          className="h-[45px] w-full outline-none border-slate-200 border mt-8 rounded-md bg-gray-200 font-[600] text-[16px] placeholder:text-gray-500 p-2 "
        />
        <button className="mt-8 w-full text-white bg-blue-600 rounded-[30px] font-[700] h-[43px]">
          Send verfication email
        </button>
        <h1 className="text-[28px] text-blue-700 text-center mt-10 font-[700]">
          capicoin
        </h1>
      </div>
    </div>
  );
}

export default ForgotPassword;
