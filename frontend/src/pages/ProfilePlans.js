/** @format */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileNav from "../components/ProfileNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function ProfilePlans() {
  const [plans, setPlans] = useState([]);
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
        className="mt-[100px] max-w-[1070px] p-2 mx-auto mb-[200px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <ProfileNav />
        <div className="mt-6">
          <h3 className="text-2xl text-gray-600">Oladips200@gmail.com</h3>
          <p className="text-gray-700">Your Plans / Investments</p>
        </div>
        <div>
          {plans?.length >= 1 ? (
            <>
              {plans.map((plan) => (
                <div className="max-w-[400px] p-2 shadow-md rounded-md mt-[40px] border border-slate-300">
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Plan</h1>
                    <span className="font-[600] text-[15px]">
                      {plan.plan.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Status</h1>
                    <span className="font-[600] text-[15px] text-green-600">
                      {plan.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Interest</h1>
                    <span className="font-[600] text-[15px]">
                      {plan.plan.interest}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Amount</h1>
                    <span className="font-[600] text-[15px]">
                      ${plan.amount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Wallet address</h1>
                    <span className="font-[600] text-[15px]">
                      ${plan.ownerWallet}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Transaction Id</h1>
                    <span className="font-[600] text-[15px]">
                      {plan.transactionId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-[10px] border-b border-slate-200 pb-[5px]">
                    <h1 className="text-lg">Coinbox Plan Id</h1>
                    <span className="font-[600] text-[15px]">{plan._id}</span>
                  </div>
                </div>
              ))}
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
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default ProfilePlans;
