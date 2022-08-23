/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import loader from "../components/big-loader.png";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";


function Contents() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/news");
      setNews(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err?.response.data.message);
    }
  };


  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="">
      <Sidebar />
      <div className="ml-[240px]">
        <div className="bg-white shadow-md p-4 mb-4">
          <h1 className="text-2xl font-[500]">
            Contents you created on capicoin are shown here.
          </h1>
          <p className="text-slate-600">
            clicking on a content will take you to the content details page,
            where you can update or delete content
          </p>
        </div>
        {loading ? (
          <div className="flex items-center justify-center bg-white">
            <img src={loader} alt="" className="" />
          </div>
        ) : (
          <>
            <div className=" p-4 grid grid-cols-3 gap-6 bg-white">
              {news?.map((item) => (
                <Link to={`/Contents-details/${item._id}`} key={item._id}>
                  <div className="flex flex-col bg-white shadow-md rounded cursor-pointer overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[200px] bg-gray-200"
                    />
                    <h1 className="ml-2 text-[20px] font-[500]">
                      {item.title}
                    </h1>
                    <p className="text-sm text-slate-600 ml-2 font-[500] pb-2">
                      {moment(item?.createdAt).format("LL")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Contents;
