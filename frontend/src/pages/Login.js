/** @format */
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [showPassword, setShowPassword] = useState("");
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex justify-center items-center h-[100vh] w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <div className="h-[570px] mt-10 md:mt-0 lg:mt-0 w-full max-w-[410px] p-[10px] py-8 border-0 md:max-w-[500px] lg:max-w-[500px] md:border lg:border md:border-slate-300 lg:border-slate-300 md:p-[45px] md:py-0 lg:py-0 lg:p-[45px] rounded-lg">
        <div className="mb-[40px]">
          <h1 className="text-[30px] text-blue-800 font-bold mt-8">coinbox</h1>
          <p className="text-[25px] font-bold">Sign in to Coinbox.</p>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="font-[700]">
            Email
          </label>
          <input
            type="text"
            placeholder="Your email address"
            name="email"
            className="h-[50px] p-2 border border-slate-500 outline-none rounded-lg placeholder:text-slate-500 font-[500]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-[700]">
            Password
          </label>
          <div className="h-[50px] p-2 border border-slate-500 outline-none rounded-lg flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              name="email"
              className="flex-1 outline-none placeholder:text-slate-500 font-[500]"
            />
            {showPassword ? (
              <VisibilityOffIcon
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-600 cursor-pointer"
              />
            ) : (
              <VisibilityIcon
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-600 cursor-pointer"
              />
            )}
          </div>
        </div>
        <button className="h-[50px] rounded-[30px] w-full bg-blue-600 text-white mt-8 font-[700] mb-2">
          Sign in
        </button>
        <button
          className="h-[50px] rounded-[30px] w-full bg-gray-200  mt-4 font-[700] mb-2"
          onClick={() => navigate("/signup")}
        >
          Create free account
        </button>
        <span className="font-[600] text-blue-600 mt-[20px] cursor-pointer" onClick={() => navigate("/forgot_password")}>
          Forgot password?
        </span>
      </div>
    </motion.div>
  );
}

export default Login;
