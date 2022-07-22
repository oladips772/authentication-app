/** @format */
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import UnpublishedIcon from "@mui/icons-material/Unpublished";

const users = [
  {
    name: "john doe",
    email: "john@gmail.com",
    status: "verified",
    joinded: "2020-01-01",
  },
  {
    name: "john doe",
    email: "john@gmail.com",
    status: "verified",
    joinded: "2020-01-01",
  },
  {
    name: "john doe",
    email: "john@gmail.com",
    status: "verified",
    joinded: "2020-01-01",
  },
  {
    name: "john doe",
    email: "john@gmail.com",
    status: "verified",
    joinded: "2020-01-01",
  },
  {
    name: "john doe",
    email: "john@gmail.com",
    status: "verified",
    joinded: "2020-01-01",
  },
];

function UserList() {
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
        {users.map((user) => (
          <div className="flex justify-between my-2 p-2 cursor-pointer border-b border-gray-300">
            <span className="text-[16px] text-gray-900 font-[500]">
              {user.name}
            </span>
            <span className="text-[16px] text-gray-900 font-[500]">
              {user.email}
            </span>
            <span className="text-[16px] text-green-500 flex items-center">
              {user.status} <VerifiedIcon style={{ height: 15, width: 15 }} />{" "}
            </span>
            <span className="text-[16px] text-gray-900 font-[500]">
              {user.joinded}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
