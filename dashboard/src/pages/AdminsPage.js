/** @format */
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import toast from "react-hot-toast";
import loader from "../components/loader.png";

function AdminsPage() {
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updateProfile = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    } else {
      try {
        setLoading(true);
        const { data } = await axios.put("/api/admins/update-profile", {
          id: adminInfo._id,
          email,
          password,
        });
        toast.success("profile updated succesfully");
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error(err.response.data.message);
        console.log(err);
        toast.error(err?.response.data.message);
      }
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="ml-[230px] ">
        <div className="p-2 bg-white shadow-md">
          <h1 className="text-3xl">Welcome Admin.</h1>
          <p className="text-gray-600">You can update passwords here..</p>
        </div>
        <div className="mt-8 flex flex-col bg-white p-4 items-center w-[60%]">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="new email"
            className="w-full outline-none border border-gray-700 h-10 p-2 mb-2 rounded-md placeholder:text-gray-600"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="new password"
            className="w-full outline-none border border-gray-700 h-10 p-2 mb-2 rounded-md placeholder:text-gray-600"
          />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="confirm password"
            className="w-full outline-none border border-gray-700 h-10 p-2 rounded-md mt-2 placeholder:text-gray-600"
          />
          <button
            className="bg-black text-white text-sm rounded-sm w-full h-10 mt-4 font-[500]"
            onClick={updateProfile}
          >
            {loading ? (
              <img src={loader} alt="" className="h-[30px] w-[30px]" />
            ) : (
              "Update"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminsPage;
