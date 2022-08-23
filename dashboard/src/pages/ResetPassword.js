/** @format */
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import loader from "../components/loader.png";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function RESET() {
    if (confirmPassword !== password) {
      toast.error("passwords do not match");
    } else {
      try {
        setLoading(true);
        const { data } = await axios.put("/api/admins/update-password", {
          email,
          password,
        });
        setLoading(false);
        navigate("/Login");
        toast.success("password changed succesfully");
      } catch (err) {
        setLoading(false);

        console.log(err);
        toast.error(err?.response.data);
      }
    }
  }

  return (
    <div className="bg-black h-[100vh] flex items-center justify-center text-center">
      <div className="bg-black p-2 flex flex-col w-[430px] shadow-md h-[420px] rounded-md -mt-[40px] border border-gray-800">
        <img
          src="https://ethereum.org/static/c48a5f760c34dfadcf05a208dab137cc/d1ef9/eth-diamond-rainbow.png"
          className="object-contain ml-2 mt-4 h-20 w-20 text-center justify-center self-center"
          alt=""
        />
        <h3 className="text-2xl font-[500] text-gray-300 m-2">
          Reset Password
        </h3>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-[40px] my-2 mb-2 p-2 outline-none border border-gray-800 rounded-sm bg-transparent text-gray-400"
        />
        <div className="flex items-center border border-gray-800 rounded-sm h-[40px]">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" my-2 mb-2 p-2 outline-none bg-transparent text-gray-400 flex-1"
          />
          {showPassword ? (
            <VisibilityOffIcon
              titleAccess="hide password"
              className="text-gray-600 mr-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <VisibilityIcon
              titleAccess="show password"
              className="text-gray-600 mr-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        <div className="flex items-center border border-gray-800 rounded-sm h-[40px] mt-2">
          <input
            type={showPassword2 ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className=" my-2 mb-2 p-2 outline-none bg-transparent text-gray-400 flex-1"
          />
          {showPassword2 ? (
            <VisibilityOffIcon
              titleAccess="hide password"
              className="text-gray-600 mr-2 cursor-pointer"
              onClick={() => setShowPassword2(!showPassword2)}
            />
          ) : (
            <VisibilityIcon
              titleAccess="show password"
              className="text-gray-600 mr-2 cursor-pointer"
              onClick={() => setShowPassword2(!showPassword2)}
            />
          )}
        </div>
        <button
          className="bg-gray-900 text-white rounded-sm mt-4 h-[40px] text-sm font-[400] border border-gray-800 flex items-center justify-center"
          onClick={RESET}
        >
          {loading ? (
            <img src={loader} className="h-[20px] w-[20px]" alt="loader" />
          ) : (
            "Reset"
          )}
        </button>
        <p className="mt-2 mb-2 text-gray-500">
          go back to{" "}
          <Link to="/Login">
            <span className="text-gray-300 cursor-pointer">login</span>
          </Link>
        </p>
        <span className="flex items-center justify-center text-gray-700 text-sm">
          capicoin&copy;2022{" "}
        </span>
      </div>
    </div>
  );
}

export default ResetPassword;
