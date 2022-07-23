import React from 'react'
import Sidebar from '../components/Sidebar'
import receipts from "../data/receipt";
import withdrawals from "../data/withdrawals";


function WithdrawalPage() {
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
            {withdrawals.map((item) => (
              <div
                className="shadow-md flex-col items-center p-2 rounded bg-black text-white"
                key={item.id}
              >
                <div className="flex justify-between items-center border-b border-red-300 pb-2">
                  <div className="flex items-center space-x-2">
                    <p>Plan:</p>
                    <span className="text-blue-500">{item.paymentPlan}</span>
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
                  <span>march 21 2022</span>
                </div>
                <div className="flex justify-between items-center my-4">
                  <p>Payment User:</p>
                  <span>{item.owner}</span>
                </div>
                <div className="flex justify-between items-center my-4">
                  <p>User Wallet:</p>
                  <span>{item.userWallet}</span>
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-green-600 text-white text-sm font-[500] h-[30px] w-[120px] rounded-sm">
                    VERIFY
                  </button>
                  <button className="bg-red-600 text-white text-sm font-[500] h-[30px] w-[120px] rounded-sm">
                    REJECT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawalPage;