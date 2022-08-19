/** @format */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import toast from "react-hot-toast";

function Form() {
  const location = useLocation();
  const [invalidUser, setInvalidUser] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const { token, id } = queryString.parse(location.search);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password.trim().length < 8 || confirmPassword.trim().length < 8) {
      toast.error("passwords legnth are too short!, 8 chars required");
    }
    if (password !== confirmPassword) {
      toast.error("passwords do not macth");
      return;
    }

    try {
      const { data } = await axios.post(
        `/api/users/reset-password?token=${token}&id=${id}`,
        {
          password,
        }
      );
      if (data.success) {
        toast.success("password changed successfully");
        setPassword("");
        setConfirmPassword("");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const isVerifyToken = async () => {
    try {
      const { data } = await axios.post(
        `/api/users/verify-token?token=${token}&id=${id}`
      );
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      if (err?.response?.data) {
        const { data } = err?.response;
        if (!data.success) return setInvalidUser(true);
        return console.log(err.response.data);
      }
      console.log(err);
    }
  };

  // useEffect(() => {
  //   isVerifyToken();
  // }, []);

  return (
    <div className="max-w-[600px] m-auto flex flex-col justify-center items-center h-[100vh]">
      {invalidUser ? (
        <h1>No token or wrong token found </h1>
      ) : (
        <form
          className="border border-slate-300 rounded-lg bg-white p-2"
          // onSubmit={submitHandler}
        >
          {invalidUser ? (
            <h1>No token or wrong token found </h1>
          ) : (
            <>
              {loading ? (
                <h1> wait a moment verifying token</h1>
              ) : (
                <>
                  <h1 className="text-center text-3xl text-blue-700 mb-20 font-[600]">
                    Reset Password
                  </h1>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="px-3 border-gray-400 border rounded-md w-full h-10 outline-none p-2 text-lg mb-2"
                    placeholder="New Password"
                  />
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="px-3 border-gray-400 border rounded-md w-full h-10 outline-none p-2 mt-2 text-lg"
                    placeholder="Confirm Password"
                  />
                  <button className="bg-blue-600 text-lg w-full h-[40px] rounded-[20px] cursor-pointer text-white font-bold mt-4">
                    Reset
                  </button>
                  <h1 className="text-center font-[600] text-blue-600 mt-6 ">
                    coinbox &copy; all rights reserved.
                  </h1>
                </>
              )}
            </>
          )}
        </form>
      )}
    </div>
  );
}

export default Form;
