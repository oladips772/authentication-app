/** @format */
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
  const [showPassword, setShowPassword] = useState("");
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex justify-center items-center h-[100vh] w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <div className="h-[580px] md:h-[640px] lg:h-[640px] w-full max-w-[390px] p-[20px] border-0 md:max-w-[500px] lg:max-w-[500px] md:border lg:border md:border-slate-300 lg:border-slate-300 md:p-[45px] lg:p-[45px] rounded-lg">
        <div className="mb-[40px] mt-10">
          <h1 className="text-[30px] mt-10 text-blue-800 font-bold">coinbox</h1>
          <p className="text-[25px] font-bold">Create your free account.</p>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="font-[700]">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            name="name"
            className="h-[50px] p-2 border border-slate-500 outline-none rounded-lg placeholder:text-slate-500 font-[600]"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="font-[700]">
            Email
          </label>
          <input
            type="text"
            placeholder="Your email address"
            name="email"
            className="h-[50px] p-2 border border-slate-500 outline-none rounded-lg placeholder:text-slate-500 font-[600]"
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
              className="flex-1 outline-none placeholder:text-slate-500 font-[600]"
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
          Create account
        </button>
        <button
          className="h-[50px] rounded-[30px] w-full bg-gray-200  mt-4 font-[700] mb-2"
          onClick={() => navigate("/login")}
        >
          Sign in to your account
        </button>
      </div>
    </motion.div>
  );
}

export default Register;
