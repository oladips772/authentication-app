/** @format */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

function Form() {
  const location = useLocation();
  const [invalidUser, setInvalidUser] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const { token, id } = queryString.parse(location.search);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password.trim().length < 8 || confirmPassword.trim().length < 8) {
      alert("passwords legnth are too short!, 8 chars required");
    }
    if (password !== confirmPassword) {
      alert("passwords do not macth");
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
        alert("password changed successfully");
      }
      console.log(data);
      alert("password changed successfully");
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

  useEffect(() => {
    isVerifyToken();
  }, []);

  return (
    <div className="max-w-[600px] m-auto pt-10">
      {invalidUser ? (
        <h1>No token or wrong token found </h1>
      ) : (
        <form
          className="shadow-sm rounded-lg bg-white p-10"
          onSubmit={submitHandler}
        >
          {invalidUser ? (
            <h1>No token or wrong token found </h1>
          ) : (
            <>
              {loading ? (
                <h1> wait a moment verifying token</h1>
              ) : (
                <>
                  <h1 className="text-center text-3xl text-gray-500 mb-20">
                    Reset Password
                  </h1>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="px-3 border-gray-500 border-2 rounded-md w-full h-10 outline-none p-2 text-lg mb-2"
                    placeholder="New Password"
                  />
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="px-3 border-gray-500 border-2 rounded-md w-full h-10 outline-none p-2 mt-2 text-lg"
                    placeholder="Confirm Password"
                  />
                  <button className="bg-gray-500 text-sm w-full p-2 rounded cursor-pointer text-white font-bold mt-4">
                    RESET
                  </button>
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
