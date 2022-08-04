/** @format */
import { useEffect, useState } from "react";
import userPng from "../images/user.png";
import moneyPng from "../images/money.png";
import userPng from "../images/user.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import axios from "axios";
import currencyFormatter from "currency-formatter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Main() {
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
      <div className="flex flex-col items-center">
        <h2 className="text-[66px] font-[600] leading-[80px] m-4 text-center">
          Jump start your crypto career by investing with us.
        </h2>
        <div className="my-6">
          <button className="text-lg font-[600] h-[60px] w-[200px] border-2 border-blue-600 text-black">
            Sign in{" "}
          </button>
          <button className="text-lg font-[600] h-[60px] w-[200px] bg-blue-700 text-white">
            {" "}
            Get started
          </button>
        </div>
      </div>
      {/* COINS DIV */}
      <div className="bg-white border border-slate-300 mb-10 mt-4">
        <div className="flex justify-between items-center p-4 border-b border-slate-300">
          <h4 className="mx-2 font-[500] text-lg text-gray-600">Name</h4>
          <h4 className="mx-2 font-[500] text-lg text-gray-600">Price</h4>
          <h4 className="mx-2 font-[500] text-lg text-gray-600">Change</h4>
        </div>
        {coins?.slice(0, 10).map((coin) => (
          <div className="flex justify-between items-center border-b border-slate-200 p-4 mx-4">
            <div className="flex items-center space-x-4 ">
              <img src={coin.image} alt="" className="h-[35px] w-[35px]" />
              <h4 className="font-[500] text-[20px]">{coin.name}</h4>
              <h4 className="text-gray-500 font-[600]">
                {coin.symbol.toUpperCase()}
              </h4>
            </div>
            <div className="flex">
              <h5 className="text-lg font-[600]">
                {currencyFormatter.format(coin.current_price, { code: "NGN" })}
              </h5>
            </div>
            <h5>{coin.ath_change_percentage}</h5>
          </div>
        ))}
      </div>
      {/* world div */}
      <div className="my-8">
        <h1 className="text-[60px] text-center font-[800] leading-[75px]">
          The World's Fastest Growing Crypto Investment Platform{" "}
        </h1>
        <div className="space-y-2 mt-4">
          <div className="flex items-center space-x-4 justify-center">
            <CheckCircleIcon className="text-blue-800" />
            <h4 className="text-2xl font-[500]">
              Join 50m+ users buying and selling 250+ cryptocurrencies at true
              cost
            </h4>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <CheckCircleIcon className="text-blue-800" />
            <h4 className="text-2xl font-[500]">
              Join 50m+ users buying and selling 250+ cryptocurrencies at true
              cost
            </h4>
          </div>{" "}
          <div className="flex items-center space-x-4 justify-center">
            <CheckCircleIcon className="text-blue-800" />
            <h4 className="text-2xl font-[500]">
              Join 50m+ users buying and selling 250+ cryptocurrencies at true
              cost
            </h4>
          </div>
        </div>
      </div>
      {/*  get started div*/}
      <div></div>
    </main>
  );
}

export default Main;
