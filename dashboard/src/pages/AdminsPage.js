/** @format */
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import toast from "react-hot-toast";
import loader from "../components/loader.png";
import bigLoader from "../components/big-loader.png";

function AdminsPage() {
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
  const [getLoading, setGetLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  

  // ? updating profile
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

  // ? getting all admins
  const getAdmins = async () => {
    try {
      setGetLoading(true);
      const { data } = await axios.get("/api/admins");
      setAdmins(data);
      setGetLoading(false);
    } catch (err) {
      setGetLoading(false);
      toast.error(err.response.data.message);
    }
  };

  // ? deleting admin
  const deleteAdmin = async (id) => {
    try {
      const { data } = await axios.delete(`/api/admins/${id}`);
      toast.success("admin deleted succesfully");
      getAdmins();
    } catch (err) {
      console.log(err);
      toast.error(err?.response.data.message);
    }
  };

  // ? creating admin
  const createAdmin = async () => {
    if (!adminName || !adminEmail || !adminPassword) {
      toast.error("all fields are required");
      return;
    } else {
      try {
        setCreateLoading(true);
        const { data } = await axios.post("/api/admins/register", {
          name: adminName,
          email: adminEmail,
          password: adminPassword,
        });
        toast.success("admin created succesfully");
        setCreateLoading(false);
        setAdminName("");
        setAdminEmail("");
        setAdminPassword("");
        getAdmins();
      } catch (err) {
      console.log(err);
        setCreateLoading(false);
        toast.error(err.response.data);
      }
    }
  };

  useEffect(() => {
    getAdmins();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="ml-[230px] ">
        <div className="p-2 bg-white shadow-md">
          <h1 className="text-3xl">Welcome Admin.</h1>
          <p className="text-gray-600">
            You can update passwords and create new admin
          </p>
        </div>
        <div className="bg-white mt-4 shadow">
          <h1 className="text-2xl p-2 font-[500] border-b border-slate-300">
            Admins on capicoin
          </h1>
          <div className="flex items-center justify-around p-2 shadow-md">
            <h3>Name</h3>
            <h3>Email</h3>
            <h3>Action</h3>
          </div>
          {getLoading ? (
            <div className="flex items-center justify-center">
              <img src={bigLoader} alt="" />
            </div>
          ) : (
            <>
              {admins?.map((admin) => (
                <div
                  className="flex items-center justify-around p-4 border-b border-slate-300"
                  key={admin._id}
                >
                  <h3 className="text-gray-800 font-[400] text-lg">
                    {admin.name}
                  </h3>
                  <h3 className="text-gray-800 font-[400] text-lg">
                    {admin.email}
                  </h3>
                  <button
                    className="h-[30px] w-[100px] bg-red-700 text-white text-sm rounded-sm font-[500]"
                    disabled={admin._id === adminInfo._id}
                    onClick={() => deleteAdmin(admin._id)}
                  >
                    {admin._id === adminInfo._id ? "YOU" : "Delete"}
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
        {/* update admin profile */}
        <div className="mt-8 flex flex-col bg-white p-4 items-center w-[60%]">
          <h1 className="text-2xl p-2 font-[500] w-full mb-4">
            Update your account{" "}
          </h1>

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
        {/* create admin */}
        <div className="mt-8 flex flex-col bg-white p-4 items-center w-[60%]">
          <h1 className="text-2xl p-2 font-[500] w-full mb-4">
            Create new admin{" "}
          </h1>
          <input
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            type="text"
            placeholder="Admin Name"
            className="w-full outline-none border border-gray-700 h-10 p-2 mb-2 rounded-md placeholder:text-gray-600"
          />
          <input
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            type="text"
            placeholder="Admin email"
            className="w-full outline-none border border-gray-700 h-10 p-2 mb-2 rounded-md placeholder:text-gray-600"
          />
          <input
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            type="password"
            placeholder="Admin password"
            className="w-full outline-none border border-gray-700 h-10 p-2 mb-2 rounded-md placeholder:text-gray-600"
          />
          <button
            className="bg-black text-white text-sm rounded-sm w-full h-10 mt-4 font-[500] flex items-center justify-center"
            onClick={createAdmin}
          >
            {createLoading ? (
              <img src={loader} alt="" className="h-[27px] w-[27px]" />
            ) : (
              "Create"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminsPage;
