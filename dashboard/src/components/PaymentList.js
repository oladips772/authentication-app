/** @format */
import { useState } from "react";
import moment from "moment";
import axios from "axios";
import loader from "./loader.png";
import toast, { Toaster } from "react-hot-toast";

function PaymentList({ data }) {
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [rejectLoading, setRejectLoading] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const verifyPayment = async (id) => {
    setCurrentId(id);
    try {
      setVerifyLoading(true);
      const response = await axios.put(
        `/api/payment-receipts/verify-payment/${id}`
      );
      setVerifyLoading(false);
      toast.success("payment verified succesfully");
      window.location.reload();
    } catch (err) {
      setVerifyLoading(false);
      console.log(err);
    }
    setCurrentId("");
  };

  const rejectPayment = async (id) => {
    setCurrentId(id);
    try {
      setRejectLoading(true);
      const response = await axios.put(
        `/api/payment-receipts/reject-payment/${id}`
      );
      setRejectLoading(false);
      toast.success("payment rejected successfully");
      window.location.reload();
    } catch (err) {
      setRejectLoading(false);
      console.log(err);
    }
    setCurrentId("");
  };

  return (
    <>
      {data.map((item) => (
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
                  item.status === "rejected" ? "text-red-500" : "text-green-500"
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
                {verifyLoading ? (
                  <img src="../../public/loader.png" />
                ) : (
                  "VERIFY"
                )}
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
                disabled={verifyLoading}
                className="bg-green-600 text-white text-sm font-[600] h-[35px] rounded-sm w-full flex items-center justify-center text-center"
                onClick={() => verifyPayment(item._id)}
              >
                {verifyLoading ? (
                  <>
                    {currentId === item._id ? (
                      <img
                        src={loader}
                        className="h-[30px] w-[30px] object-contain justify-center text-center flex items-center"
                      />
                    ) : (
                      "VERIFY"
                    )}
                  </>
                ) : (
                  "VERIFY"
                )}
              </button>
            )}
            {item.status === "verified" && (
              <button
                disabled={rejectLoading}
                className="bg-red-600 text-white text-sm font-[500] h-[35px] w-full rounded-sm  flex items-center justify-center text-center"
                onClick={() => rejectPayment(item._id)}
              >
                <>
                  {rejectLoading ? (
                    <>
                      {currentId === item._id ? (
                        <img
                          src={loader}
                          className="h-[30px] w-[30px] object-contain justify-center text-center flex items-center"
                        />
                      ) : (
                        "REJECT"
                      )}
                    </>
                  ) : (
                    "REJECT"
                  )}
                </>
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default PaymentList;
