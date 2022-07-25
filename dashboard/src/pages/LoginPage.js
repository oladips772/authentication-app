/** @format */
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-black h-[100vh] flex items-center justify-center text-center">
      <div className="bg-white p-2 flex flex-col w-[550px] shadow-md h-[280px] rounded-md -mt-[40px]">
        <h3 className="text-2xl font-[500]">Welcome Admin</h3>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-[40px] my-2 mb-2 p-2 outline-none border border-gray-800 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-[40px] my-2 mb-2 p-2 outline-none border border-gray-800 rounded-md"
        />
        <button className="bg-black text-white rounded-md mt-4 h-[40px] text-sm font-[500]">
          LOGIN
        </button>
        <p className="font-[500] mb-6">
          forgot password ? <span className="text-green-600 cursor-pointer">click here</span>
        </p>
        <span className="flex items-center justify-center text-gray-500">coinbox&copy;2022 </span>
      </div>
    </div>
  );
}

export default LoginPage;
