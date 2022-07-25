/** @format */
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import VerifiedIcon from "@mui/icons-material/Verified";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import axios from "axios";
import moment from "moment";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await axios("/api/users");
      setUsers(data);
      console.log(data);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[240px] w-[80%]">
        <div className="w-full">
          <div className="p-4 bg-white rounded-sm shadow">
            <h3 className="text-lg p-2 font-[500] border-b border-gray-300">
              Here are the list of users registered on COINBOX.
            </h3>
            <div className="flex justify-between mt-2">
              <span className="text-[14px] font-bold">NAME</span>
              <span className="text-[14px] font-bold">EMAIL</span>
              <span className="text-[14px] font-bold">ACCOUNT</span>
              <span className="text-[14px] font-bold">JOINED</span>
            </div>
            {users.map((user) => (
              <div className="flex justify-between my-2 p-2 cursor-pointer border-b border-gray-300">
                <span className="text-[16px] text-gray-900 font-[500]">
                  {user.name}
                </span>
                <span className="text-[16px] text-gray-900 font-[500]">
                  {user.email}
                </span>
                {user.isVerified ? (
                  <span className="text-green-500 text-[16px] flex items-center">
                    verified
                    <VerifiedIcon style={{ height: 15, width: 15 }} />
                  </span>
                ) : (
                  <span className="text-red-600 text-[16px] flex items-center">
                    not verified
                    <UnpublishedIcon style={{ height: 15, width: 15 }} />
                  </span>
                )}
                <span className="text-[16px] text-gray-900 font-[500]">
                  {moment(user?.createdAt).format("LL")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;