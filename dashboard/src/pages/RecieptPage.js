/** @format */
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import PaymentList from "../components/PaymentList";
import toast, { Toaster } from "react-hot-toast";
import loader from "../components/big-loader.png";

function RecieptPage() {
  const [receipts, setReceipts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const search = (data) => {
    return data?.filter(
      (item) =>
        item?._id.toString().includes(query) ||
        item?.owner.email.toLowerCase().includes(query) ||
        item?.plan.name.toLowerCase().includes(query) ||
        item?.transactionId.toLowerCase().includes(query)
    );
  };

  const getReceipts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/payment-receipts/get-payments");
      setReceipts(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log(err);
      toast.error(err?.response.data.message);
    }
  };

  useEffect(() => {
    getReceipts();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="ml-[230px]">
        {/* header info div */}
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-2xl font-[500]">
            Payment receipts created by users on capicoin
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
            placeholder="search a particular receipt by plan , email or transaction id or ID"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-[16px] outline-none h-10 border border-gray-600 p-4 rounded-[30px] w-full placeholder:text-gray-600 mb-10"
          />
          {/* payments receipts */}
          {!loading ? (
            <div className="grid grid-cols-2 gap-4">
              {/* receipt */}
              {receipts?.length >= 1 ? (
                <PaymentList data={search(receipts)} />
              ) : (
                <span className="text-2xl text-center flex ">No receipts yet</span>
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center  text-center ">
              <img
                src={loader}
                className="object-contain h-[85px] w-[85px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecieptPage;
