/** @format */
import { useEffect, useState } from "react";
import userPng from "../images/user.png";
import moneyPng from "../images/money.png";
import planPng from "../images/plan.png";
import "animate.css/animate.min.css";
import axios from "axios";
import currencyFormatter from "currency-formatter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Main() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.95, 0.6], [1.1, 0.4]);
  const navigate = useNavigate();

  const [coins, setCoins] = useState([]);
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getCoins = async () => {
    const response = await axios.get(URL);
    console.log(response.data);
    setCoins(response.data);
  };

  useEffect(() => {
    // getCoins();
  }, []);

  return (
    <main className="mt-[80px]">
      <motion.div
        className="flex items-center flex-col justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <h2 className="text-[65px] font-[600] leading-[80px] m-4 text-center">
          Jump start your crypto career by investing with us.
        </h2>
        <div className="my-6 text-center flex-col items-center justify-center w-full">
          <button className="text-lg font-[600] h-[60px] max-w-[290px] w-full my-5 border-2 border-blue-600 text-black">
            Sign in{" "}
          </button>
          <button className="text-lg font-[600] h-[60px] max-w-[290px] w-full bg-blue-700 text-white">
            {" "}
            Get started
          </button>
        </div>
      </motion.div>
      {/* COINS DIV */}
      <div
        className="bg-white border border-slate-300 mb-10 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-300">
          <h4 className="mx-2 font-[500] text-lg text-gray-600">Name</h4>
          <h4 className="mx-2 font-[500] text-lg text-gray-600 ">Price</h4>
          <h4 className="mx-2 font-[500] text-lg text-gray-600 hidden md:flex lg:flex">
            Change
          </h4>
        </div>
        {coins?.slice(0, 13).map((coin) => (
          <div
            className="flex justify-between items-center border-b border-slate-200 p-4 mx-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center space-x-4 ">
              <img src={coin.image} alt="" className="h-[35px] w-[35px]" />
              <h4 className="font-[500] text-[20px]">{coin.name}</h4>
              <h4 className="text-gray-500 font-[600] hidden md:block lg:block">
                {coin.symbol.toUpperCase()}
              </h4>
            </div>
            <div className="flex">
              <h5 className="text-lg font-[600]">
                {currencyFormatter.format(coin.current_price, { code: "NGN" })}
              </h5>
            </div>
            <h5 className="hidden md:flex lg:flex">
              {coin.ath_change_percentage}
            </h5>
          </div>
        ))}
      </div>
      {/* world div */}
      <motion.div className="">
        <motion.div
          className="my-12 mb-8 mt-[20px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <h1 className="text-[60px] text-center font-[800] leading-[75px]">
            The World's Fastest Growing Crypto Investment Platform{" "}
          </h1>
          <div className="space-y-2 mt-4">
            <div className="flex flex-col space-x-4 items-center shadow-md md:space-x-0 lg:space-x-0 justify-center md:flex-row lg:items-center md:items-center lg:flex-row md:shadow-none lg:shadow-none p-2">
              <CheckCircleIcon className="text-blue-800 h-[40px] w-[40px]" />
              <h4 className="text-2xl md:font-[500] lg:font-[500] text-center p-2 font-[600]">
                Join 50m+ users buying and selling 250+ cryptocurrencies at true
                cost
              </h4>
            </div>
            <div className="flex flex-col space-x-4 items-center shadow-md md:space-x-0 lg:space-x-0 justify-center md:flex-row lg:items-center md:items-center lg:flex-row md:shadow-none lg:shadow-none p-2">
              <CheckCircleIcon className="text-blue-800 h-[40px] w-[40px]" />
              <h4 className="text-2xl md:font-[500] lg:font-[500] text-center p-2 font-[600]">
                Join 50m+ users buying and selling 250+ cryptocurrencies at true
                cost
              </h4>
            </div>{" "}
            <div className="flex flex-col space-x-4 items-center shadow-md md:space-x-0 lg:space-x-0 justify-center md:flex-row lg:items-center md:items-center lg:flex-row md:shadow-none lg:shadow-none p-2">
              <CheckCircleIcon className="text-blue-800 h-[40px] w-[40px]" />
              <h4 className="text-2xl md:font-[500] lg:font-[500] text-center p-2 font-[600]">
                Join 50m+ users buying and selling 250+ cryptocurrencies at true
                cost
              </h4>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* divider div */}
      <div className="my-4 w-[84%] mx-8 md:w-full lg:w-full">
        <div className="bg-blue-700 h-4 my-4"></div>
        <div className="bg-blue-700 h-4 my-4"></div>
        <div className="bg-blue-700 h-4 my-4"></div>
      </div>
      {/* plan div */}
      <motion.div
        className="my-12 pb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <h1 className="text-center text-[27px] font-[600] mb-4 text-slate-600">
          Plans With Assured Profits
        </h1>
        <motion.div>
          <motion.div className="flex flex-col items-center md:flex-row lg:flex-row justify-around ">
            <div className="flex flex-col items-center shadow-md p-[45px] mb-8">
              <h1 className="text-lg font-[500] border-b border-slate-300 mb-2">
                Silver Plan
              </h1>
              <h2 className="text-[30px] font-[700]">$100 - $10,000</h2>
              <p className="font-[600]">12% weekly interest</p>
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
              onClick={() => navigate("/investments_plans")}
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
              <button
                className="h-[40px] mt-6 w-[140px] bg-blue-700 text-white rounded-[30px] font-[600]"
                onClick={() => navigate("/investments_plans")}
              >
                Start Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/*  get started div*/}
      <motion.div style={{ scale }} className="mt-8 mb-8 pt-2 pb-2">
        <motion.div
          className="mt-12 flex flex-col items-center mb-12 justify-between"
          style={{
            scaleY: scrollYProgress,
          }}
        >
          <div className="break-words">
            <h2 className="text-4xl font-[700] text-center p-2">
              Get started in a few minutes.
            </h2>
            <p className="text-lg font-[600] text-gray-600 text-center flex justify-center mx-4">
              Coinbox supports a variety of the most popular digital currencies.
            </p>
          </div>
          <div className="flex flex-col mt-6 space-y-12 md:space-y-0 lg:space-y-0 items-center md:flex-row md:items-center lg:items-center lg:flex-row justify-between w-full">
            <div className="flex flex-col items-center space-y-4 mx-6">
              <img
                src={userPng}
                alt=""
                className="h-[40px] w-[50px] object-contain"
              />
              <h1 className="text-[20px] font-[600]">Create an account</h1>
            </div>
            <div className="flex flex-col items-center space-y-4 mx-6">
              <img
                src={planPng}
                alt=""
                className="h-[50px] w-[50px] object-contain"
              />
              <h1 className="text-[20px] font-[600]">Find your plans</h1>
            </div>{" "}
            <div className="flex flex-col items-center space-y-4 mx-6">
              <img
                src={moneyPng}
                alt=""
                className="h-[50px] w-[50px] object-contain"
              />
              <h1 className="text-[20px] font-[600]">Start investing</h1>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Main;
