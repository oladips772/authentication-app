/** @format */
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/ProfileNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function MyWithdrawals() {
  const [plans, setPlans] = useState([]);
  const [receipt, setReceipt] = useState(null);
  const userId = "62dc28e8627a812e6bf4233d";
  const navigate = useNavigate();

  const getMyPlans = async () => {
    try {
      const { data } = await axios.get(
        `api/payment-receipts/user-payments/${userId}`
      );
      setPlans(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyPlans();
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
          <p className="text-gray-700">Your withdrawals request</p>
        </div>
        <div className="mt-[40px]">
          <h1 className="text-2xl font-[600]">

            Make Withdrawal request for any of your investment plan.
          </h1>
          <p>Use the form below to make your Withdrawal request</p>
        </div>
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
                  {plans.map((plan) => (
                    <option value={plan.plan.name} id={plan._id}>
                      {plan.plan.name} [{plan._id}]
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-2">
                <h1 className="text-lg font-[600]">Your wallet address</h1>
                <input
                  type="text"
                  placeholder="your wallet address"
                  className="h-[40px] outline-none border border-slate-400 rounded-md w-full p-2"
                />
              </div>
              <div className="flex flex-col">
                <button className="bg-blue-600 text-white font-[600] h-[50px] rounded-[25px] mt-6 mb-2">
                  Create
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
          </>
        )}
      </motion.div>
    </div>
  );
}

export default MyWithdrawals;
