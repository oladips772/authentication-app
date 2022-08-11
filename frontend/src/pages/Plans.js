/** @format */
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Plans() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <motion.div
        className="mt-[130px] max-w-[1070px] mx-auto
      "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <div>
          <div>
            <h1 className="text-[50px] font-[600] p-2 text-start w-full md:text-start lg:text-start">
              Plans on Coinbox
            </h1>
            <p className="text-gray-600 text-[22px] font-[700] p-2">
              coinbox offers plans with assured profits for you to invest in ,
              which covers different interest rates and 24\7 withdrawals .
            </p>
          </div>{" "}
          <div className="bg-blue-700 text-white mb-6 mt-6 h-[250px] flex items-centr justify-center flex-col">
            <h1 className="text-[40px] font-[600] text-center">
              Start Investing With The Right Investment Plan.
            </h1>
          </div>
          <motion.div className="flex flex-col items-center md:flex-row lg:flex-row justify-around mt-10">
            <div className="flex flex-col items-center shadow-md p-[45px] mb-8">
              <h1 className="text-lg font-[500] border-b border-slate-300 mb-2">
                Silver Plan
              </h1>
              <h2 className="text-[30px] font-[700]">$100 - $10,000</h2>
              <p className="font-[600]">12% weekly interest</p>
              <span className="mt-4 text-sm font-bold text-gray-500">
                24/7 withdrawals
              </span>
              <button
                className="h-[40px] mt-6 w-[140px] bg-blue-700 text-white rounded-[30px] font-[600]"
                onClick={() => navigate("/investments_plans")}
              >
                Start Now
              </button>
            </div>
            <div className="flex flex-col items-center p-[45px] shadow-md mb-8">
              <h1 className="text-lg font-[500] border-b border-slate-300 mb-2">
                Gold Plan
              </h1>
              <h2 className="text-[30px] font-[700]">$100 - $10,000</h2>
              <p className="font-[600]">15% weekly interest</p>
              <span className="mt-4 text-sm font-bold text-gray-500">
                24/7 withdrawals
              </span>
              <button
                className="h-[40px] mt-6 w-[140px] bg-blue-700 text-white rounded-[30px] font-[600]"
                onClick={() => navigate("/investments_plans")}
              >
                Start Now
              </button>
            </div>{" "}
            <div className="flex flex-col items-center shadow-md p-[45px] mb-8">
              <h1 className="text-lg font-[500] border-b border-slate-300 mb-2">
                Starter Plan
              </h1>
              <h2 className="text-[30px] font-[700]">$100 - $10,000</h2>
              <p className="font-[600]">10% weekly interest</p>
              <span className="mt-4 text-sm font-bold text-gray-500">
                24/7 withdrawals
              </span>
              <button
                className="h-[40px] mt-6 w-[140px] bg-blue-700 text-white rounded-[30px] font-[600]"
                onClick={() => navigate("/investments_plans")}
              >
                Start Now
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Plans;
