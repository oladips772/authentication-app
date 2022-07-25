/** @format */
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-black h-[100vh] flex items-center justify-center text-center">
      <h1 className="">login page</h1>
    </div>
  );
}

export default LoginPage;
