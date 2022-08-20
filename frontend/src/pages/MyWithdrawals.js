/** @format */
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/ProfileNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import loader from "../components/loader.png";

function MyWithdrawals() {
  const [plans, setPlans] = useState([]);
  const [planLoading, setPlanLoading] = useState(false);
  const [withdrawalLoading, setWithdrawalLoading] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [withdrawals, setWithdrawals] = useState([]);
  const [ownerWallet, setOwnerWallet] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  console.log(receipt);
  const userId = "62dc28e8627a812e6bf4233d";

  const getMyPlans = async () => {
    try {
      setPlanLoading(true);
      const { data } = await axios.get(
        `api/payment-receipts/user-payments/${userId}`
      );
      setPlans(data);
      setLoading(false);
      console.log(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const getMyWithdrawals = async () => {
    try {
      setWithdrawalLoading(true);
      const { data } = await axios.get(
        `api/withdrawals/user-withdrawals/${userId}`
      );
      setWithdrawals(data);
      setWithdrawalLoading(false);
      console.log(data);
    } catch (err) {
      setWithdrawalLoading(false);
      console.log(err);
    }
  };

  const createWithdrawal = async () => {
    if (!receipt) return;
    try {
      setLoading(true);
      const { data } = await axios.post("api/withdrawals/create", {
        withdrawalReceipt: receipt,
        status: "pending",
        owner: userId,
        ownerWallet,
      });
      setOwnerWallet("");
      toast.success("withdrawal requested successfully");
      setLoading(false);
      getMyWithdrawals();
      console.log(data);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  };

  useEffect(() => {
    getMyPlans();
    getMyWithdrawals();
  }, []);

  return (
    <div>
      <Navbar />
      <motion.div
        className="mt-[100px] max-w-[1070px] p-2 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <ProfileNav />
        <div className="mt-6">
          <h3 className="text-2xl text-gray-600">Oladips200@gmail.com</h3>
          <span className="text-lg font-[600] text-slate-600">
            Your Referal Code:7868612-181{" "}
          </span>
          <p className="text-gray-700">Your withdrawals request</p>
        </div>
        <div className="mt-[40px]">
          <h1 className="text-2xl font-[600]">
            Make Withdrawal request for any of your investment plan.
          </h1>
          <p>Use the form below to make your Withdrawal request</p>
        </div>
        <>
          {withdrawals?.length >= 1 ? (
            <>
              {withdrawals.map((withdrawal) => (
                <div className="max-w-[400px] p-2 shadow-md rounded-md mt-[40px] border border-slate-300">
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Withdrawal Status</h1>
                    <span
                      className={`font-[600] text-[15px] ${
                        withdrawal.status === "verified" || "pending"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {withdrawal.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Plan</h1>
                    <span className="font-[600] text-[15px]">
                      {withdrawal?.withdrawalReceipt?._id}
                    </span>
                  </div>
                  <div className="text-green-600 flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg text-black">Plan Status</h1>
                    {withdrawal?.withdrawalReceipt?.status === "rejected" && (
                      <>
                        <span className="font-[600] text-[15px] text-red-600">
                          {withdrawal.withdrawalReceipt?.status}
                        </span>
                      </>
                    )}
                    {withdrawal?.withdrawalReceipt?.status === "pending" && (
                      <>
                        <span className="font-[600] text-[15px] text-green-600">
                          {withdrawal?.withdrawalReceipt?.status}
                        </span>
                      </>
                    )}
                    {withdrawal?.withdrawalReceipt?.status === "verified" && (
                      <>
                        <span className="font-[600] text-[15px] text-green-600">
                          {withdrawal?.withdrawalReceipt?.status}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Wallet address</h1>
                    <span className="font-[600] text-[15px]">
                      ${withdrawal.ownerWallet}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Withdrawal Id</h1>
                    <span className="font-[600] text-[15px]">
                      {withdrawal._id}
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {withdrawalLoading ? (
                <div className="h-[400px] mb-10 mt-4">
                  <h1 className="text-lg font-[600] text-slate-600 mt-8">
                    fetching your withdrawals , please wait...
                  </h1>
                </div>
              ) : (
                <div className="mt-[60px] text-center mb-[150px]">
                  <h1 className="text-3xl font-[600] p-2">
                    You have not made any withdrawal request yet
                  </h1>
                </div>
              )}
            </>
          )}
        </>
        <>
          {plans?.length >= 1 ? (
            <>
              <div className="max-w-[500px] w-full mt-8 shadow-md rounded-md p-2">
                <div className="my-2 p-2">
                  <h1 className="text-lg font-[600]">
                    Select a plan for withdrawals
                  </h1>
                  <select
                    className="w-full h-[40px] text-lg p-2 cursor-pointer outline-none"
                    onChange={(e) => setReceipt(e.target.value)}
                  >
                    <option value="">select a plan</option>
                    {plans?.map((plan) => (
                      <option value={plan._id} id={plan._id} key={plan._id}>
                        {plan.plan.name} [{plan._id}]
                      </option>
                    ))}
                  </select>
                </div>
                <div className="p-2">
                  <h1 className="text-lg font-[600]">Your wallet address</h1>
                  <input
                    type="text"
                    value={ownerWallet}
                    onChange={(e) => setOwnerWallet(e.target.value)}
                    placeholder="your wallet address"
                    className="h-[40px] outline-none border border-slate-400 rounded-md w-full p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <button
                    className="bg-blue-600 text-white font-[600] h-[50px] rounded-[25px] mt-6 mb-2 text-center flex items-center justify-center"
                    onClick={createWithdrawal}
                  >
                    {loading ? (
                      <img scr={loader} className="h-[14px] w-[14px]" alt="" />
                    ) : (
                      "Make Withdrawal"
                    )}
                  </button>
                  <span className="text-gray-600 font-[600]">
                    Please Note: withdrawal request may take upto 2 hours for
                    payment to be sent only when the withdrawal due time has
                    reached.
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              {planLoading ? (
                <div className="h-[400px] mb-10 mt-4">
                  <h1 className="text-lg font-[600] text-slate-600 mt-8">
                    fetching your plans for withdrawals , please wait...
                  </h1>
                </div>
              ) : (
                <div className="mt-[60px] text-center">
                  <h1 className="text-3xl font-[600] p-2">
                    You have not invested yet..
                  </h1>
                  <p
                    className="mt-2 font-[600] text-lg cursor-pointer"
                    onClick={() => navigate("/investments_plans")}
                  >
                    click here to make your first investment
                  </p>
                </div>
              )}
            </>
          )}
        </>
      </motion.div>
      <Footer />
    </div>
  );
}

export default MyWithdrawals;
