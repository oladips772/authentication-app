/** @format */
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import loader from "../components/big-loader.png";
import smallLoader from "../components/loader.png";
import moment from "moment"

function WithdrawalPage() {
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [currentId, setCurrentId] = useState("");

  async function verifyWithdrawal(id) {
    setCurrentId(id);
    try {
      setVerifyLoading(true);
      const { data } = await axios.put(`/api/withdrawals/update/${id}`);
      setVerifyLoading(false);
      toast.success("you confirmed payment sent");
      getWithdrawals()
    } catch (err) {
      setVerifyLoading(false);
      toast.error(err?.response.data.message);
    }
    setCurrentId("");
  }

  const getWithdrawals = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/withdrawals");
      setWithdrawals(data);
      setLoading(false);
      console.log(data);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWithdrawals();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="ml-[230px]">
        {/* header info div */}
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-2xl font-[500]">
            Withdrawals requested by users on coinbox
          </h3>
          <p className="text-gray-600">
            you can confirm when you have sent the payment by clicking on the{" "}
            <span className="text-green-600 font-[500]">verify button </span> on
            each withdrawal.{" "}
            <span className="text-red-800 font-[500]">
              Note : this can't be undone
            </span>
          </p>
        </div>
        {/* search div */}
        <div className="w-full bg-white mt-4 shadow-md rounded-sm p-4">
          {/* payments receipts */}
          {/* receipt */}
          <div>
            {loading ? (
              <div className="flex justify-center items-center  text-center ">
                <img
                  src={loader}
                  className="object-contain h-[85px] w-[85px]"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <>
                  {withdrawals?.map((item) => (
                    <div
                      className="shadow-md flex-col items-center p-2 rounded bg-black text-white"
                      key={item._id}
                    >
                      <div className="flex justify-between items-center border-b border-red-300 pb-2 ">
                        <div
                          className="flex items-center space-x-2"
                          style={{ wordBreak: "break-all" }}
                        >
                          <p>Plan:</p>
                          <span className="text-blue-500">
                            {item.withdrawalReceipt._id}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <p>Status:</p>
                          <span className="text-green-400 rounded ">
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center my-4">
                        <p>Date Created:</p>
                        <span>{moment(item?.createdAt).format("LL")} </span>
                      </div>
                      <div className="flex justify-between items-center my-4">
                        <p>Payment User:</p>
                        <span>{item.owner.email}</span>
                      </div>
                      <div className="flex justify-between items-center my-4">
                        <p>User Wallet:</p>
                        <span>{item.ownerWallet}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <button
                          disabled={verifyLoading}
                          className="bg-green-600 text-white text-sm font-[500] h-[30px] w-full rounded-sm flex items-center justify-center text-center"
                          onClick={() => verifyWithdrawal(item._id)}
                        >
                          {verifyLoading ? (
                            <>
                              {currentId === item._id ? (
                                <img
                                  src={smallLoader}
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
                      </div>
                    </div>
                  ))}
                </>
              </div>
            )}
            {withdrawals?.length === 0 && (
              <div className="flex justify-center items-center text-center">
                <p className="text-gray-800 text-2xl">
                  No withdrawals requested yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawalPage;
