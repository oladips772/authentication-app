/** @format */
import { useEffect, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import axios from "axios";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import loader from "./big-loader.png";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios("/api/users");
      setUsers(data);
      setLoading(false);

      console.log(data);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="ml-[60px] mt-8 bg-white rounded-lg shadow-lg p-4 w-[71%]">
      <h3 className="text-lg font-bold border-b border-gray-300">
        Some of your users
      </h3>
      <div>
        <div className="flex justify-between mt-2">
          <span className="text-[14px] font-bold">NAME</span>
          <span className="text-[14px] font-bold">EMAIL</span>
          <span className="text-[14px] font-bold">ACCOUNT</span>
          <span className="text-[14px] font-bold">JOINED</span>
        </div>
        {loading ? (
          <>
            <div className="flex justify-center items-center  text-center ">
              <img src={loader} className="object-contain h-[85px] w-[85px]" />
            </div>
          </>
        ) : (
          <>
            {users.slice(0, 5).map((user) => (
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
                  {moment(user?.createdAt).format("LL")}{" "}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default UserList;
