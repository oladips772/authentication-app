/** @format */
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";

// TODO:get userinfo  here for creating plans
function Investment() {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState(null);
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [ownerWallet, setOwnerWallet] = useState("");
  const id = "62dc28e8627a812e6bf4233d";

  const getPlans = async () => {
    try {
      const { data } = await axios.get("api/plans/get-plans");
      console.log(data);
      setPlans(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);

  const createPayment = async () => {
    if (!plan || !amount || !transactionId || !ownerWallet) return;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      setLoading(true);
      const { data } = await axios.post(
        `api/payment-receipts/create-payment`,
        {
          plan,
          status: "pending",
          owner: id,
          amount,
          transactionId,
          ownerWallet,
        },
        config
      );
      setLoading(false);
      toast.success("payment created successfully");
      console.log(data);
      setAmount("");
      setTransactionId("");
      setOwnerWallet("");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <motion.div
        className="max-w-[1070px] p-2 mt-[120px] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <h1 className="text-[35px] font-[700]">
          Make or create your payment receipts.
        </h1>
        <p className="text-2xl text-gray-500 font-[500]">
          please choose any of the following addresses to transfer or send your
          investment fees to.
        </p>
        <div className="flex flex-col mt-4 break-words">
          <span className="text-[30px] font-[500] my-[2px] text-gray-600 cursor-pointer">
            3eb3fbbsmxmz6oqufgk28ygpucuv8u94gx
          </span>
        </div>
        <motion.div>
          <motion.div className="flex flex-col items-center md:flex-row lg:flex-row justify-around mt-[50px] my-10">
            <div className="flex flex-col items-center shadow-md p-[45px] mb-8">
              <h1 className="text-lg font-[500] border-b border-slate-300 mb-2">
                Silver Plan
              </h1>
              <h2 className="text-[30px] font-[700]">$1000 - $30,000</h2>
              <p className="font-[600]">12% weekly interest</p>
              <span className="mt-4 text-sm font-bold text-gray-500">
                24/7 withdrawals
              </span>
            </div>
            <div className="flex flex-col items-center p-[45px] shadow-md mb-8">
              <h1 className="text-lg font-[500] border-b border-slate-300 mb-2">
                Gold Plan
              </h1>
              <h2 className="text-[30px] font-[700]">$5000 - $100,000</h2>
              <p className="font-[600]">15% weekly interest</p>
              <span className="mt-4 text-sm font-bold text-gray-500">
                24/7 withdrawals
              </span>
            </div>{" "}
            <div className="flex flex-col items-center shadow-md p-[45px] mb-8">
              <h1 className="text-lg font-[500] border-b border-slate-300 mb-2">
                Starter Plan
              </h1>
              <h2 className="text-[30px] font-[700]">$100 - $25,000</h2>
              <p className="font-[600]">10% weekly interest</p>{" "}
              <span className="mt-4 text-sm font-bold text-gray-500">
                24/7 withdrawals
              </span>{" "}
            </div>
          </motion.div>
        </motion.div>
        {/*  */}
        <div className="my-10">
          <h1 className="text-3xl font-[600] text-slate-500 mb-2">
            Payment Receipt Form
          </h1>
          <p className="text-lg font-[600] text-slate-500">
            form should only be filled when payments have been made to any of
            the crypto addresses above.
          </p>
        </div>
        <div className="flex flex-col justify-center max-w-[900px] mx-auto p-4 shadow-md rounded-md bg-white mt-8">
          <div className="mb-4">
            <label className="text-lg font-[500] ">Select a plan</label>
            <select
              className="w-full h-[40px] text-lg p-2 cursor-pointer outline-none"
              onChange={(e) => setPlan(e.target.value)}
            >
              <option value="select a plan">select a plan</option>
              {plans?.map((plan) => (
                <option value={plan._id} id={plan._id} key={plan._id}>
                  {plan.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 flex flex-col">
            <label className="text-lg font-[500] ">Amount</label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder="amount paid in figures (10000)"
              className="h-[40px] outline-none border border-slate-400 rounded-md w-full p-2"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="text-lg font-[500] ">Transaction ID</label>
            <input
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              type="text"
              placeholder="your payment transaction id"
              className="h-[40px] outline-none border border-slate-400 rounded-md w-full p-2"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="text-lg font-[500] ">Your Crypto Wallet</label>
            <input
              value={ownerWallet}
              onChange={(e) => setOwnerWallet(e.target.value)}
              type="text"
              placeholder="your crypto wallet"
              className="h-[40px] outline-none border border-slate-400 rounded-md w-full p-2"
            />
          </div>
          <button
            className="bg-blue-600 text-white font-[600] h-[45px] rounded-[25px] mt-6 mb-2"
            onClick={createPayment}
          >
            {loading ? "Submitting" : "Submit"}
          </button>
          <span className="text-gray-600 font-[600]">
            Please Note: payment receipts may take upto 2 hours for payment to
            be verified.
          </span>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Investment;
