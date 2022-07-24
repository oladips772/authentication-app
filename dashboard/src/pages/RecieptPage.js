/** @format */
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import moment from "moment";

function RecieptPage() {
  const [receipts, setReceipts] = useState([]);

  const verifyPayment = async (id) => {
    try {
      const response = await axios.put(
        `/api/payment-receipts/verify-payment/${id}`
      );
      alert("payment verified");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const rejectPayment = async (id) => {
    try {
      const response = await axios.put(
        `/api/payment-receipts/reject-payment/${id}`
      );
      alert("payment rejected");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const getReceipts = async () => {
    try {
      const { data } = await axios.get("/api/payment-receipts/get-payments");
      setReceipts(data);
      console.log(data);
    } catch (err) {
      alert(err?.message);
    }
  };

  useEffect(() => {
    getReceipts();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="ml-[230px]">
        {/* header info div */}
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-2xl font-[500]">
            Payment receipts created by users on coinbox
          </h3>
          <p className="text-gray-600">
            you can confirm payments by clicking on the{" "}
            <span className="text-green-600 font-[500]">verify button </span> on
            each receipt or reject a payment if its not confirmed by clicking on
            the {""}
            <span className="text-red-600 font-[500]">reject button</span>.
          </p>
        </div>
        {/* search div */}
        <div className="w-full bg-white mt-4 shadow-md rounded-sm p-4">
          <input
            placeholder="search a particular receipt"
            type="text"
            className="text-[16px] outline-none h-10 border border-gray-600 p-4 rounded-[30px] w-full placeholder:text-gray-600 mb-10"
          />
          {/* payments receipts */}
          <div className="grid grid-cols-2 gap-4">
            {/* receipt */}
            {receipts?.map((item) => (
              <div
                className="shadow-md flex-col items-center p-2 rounded bg-black text-white"
                key={item._id}
              >
                <div className="flex justify-between items-center border-b border-red-300 pb-2">
                  <div className="flex items-center space-x-2">
                    <p>Plan:</p>
                    <span className="text-blue-500">{item.plan.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p>Status:</p>
                    <span
                      className={`${
                        item.status === "rejected"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center my-4">
                  <p>ID:</p>
                  <span>{item._id}</span>
                </div>
                <div className="flex justify-between items-center my-4">
                  <p>Date Created</p>
                  <span>{moment(item?.createdAt).format("LL")} </span>
                </div>
                <div className="flex justify-between items-center my-4">
                  <p>Payment User:</p>
                  <span>{item.owner.email}</span>
                </div>
                <div className="flex justify-between items-center my-4">
                  <p>Amount Paid:</p>
                  <span>${item.amount}</span>
                </div>
                <div className="flex justify-between items-center my-4">
                  <p>Transaction ID:</p>
                  <span>{item.transactionId}</span>
                </div>
                <div className="flex justify-between items-center my-4">
                  <p>User Wallet:</p>
                  <span>{item.ownerWallet}</span>
                </div>
                {item.status === "pending" && (
                  <div className="flex justify-between items-center">
                    <button
                      className="bg-green-600 text-white text-sm font-[500] h-[30px] rounded-sm w-[260px]"
                      onClick={() => verifyPayment(item._id)}
                    >
                      VERIFY
                    </button>
                    <button
                      className="bg-red-600 text-white text-sm font-[500] h-[30px] w-[260px] rounded-sm"
                      onClick={() => rejectPayment(item._id)}
                    >
                      REJECT
                    </button>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  {item.status === "rejected" && (
                    <button
                      className="bg-green-600 text-white text-sm font-[500] h-[30px] rounded-sm w-full"
                      onClick={() => verifyPayment(item._id)}
                    >
                      VERIFY
                    </button>
                  )}
                  {item.status === "verified" && (
                    <button
                      className="bg-red-600 text-white text-sm font-[500] h-[30px] w-full rounded-sm"
                      onClick={() => rejectPayment(item._id)}
                    >
                      REJECT
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecieptPage;
