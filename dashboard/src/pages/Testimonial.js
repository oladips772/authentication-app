/** @format */
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import toast from "react-hot-toast";

const testimonials = [
  {
    _id: 1,
    owner: "oladips200@gmail.com",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam placeat. Quidem quae corporis corrupti? Unde repellendus beatae temporibus quod, mollitia incidunt amet aliquid, dolorem atque repudiandae, tempore exercitationem sequi!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam placeat. Quidem quae corporis corrupti? Unde repellendus beatae temporibus quod, mollitia incidunt amet aliquid, dolorem atque repudiandae, tempore exercitationem sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam placeat. Quidem quae corporis corrupti? Unde repellendus beatae temporibus quod, mollitia incidunt amet aliquid, dolorem atque repudiandae, tempore exercitationem sequi!",
    date: "12/07/22",
    status: "approved",
  },
  {
    _id: 2,
    owner: "ade200@gmail.com",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam placeat. Quidem quae corporis corrupti? Unde repellendus beatae temporibus quod, mollitia incidunt amet aliquid, dolorem atque repudiandae, tempore exercitationem sequi!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam placeat. Quidem quae corporis corrupti? Unde repellendus beatae temporibus quod, mollitia incidunt amet aliquid, dolorem atque repudiandae, tempore exercitationem sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam placeat. Quidem quae corporis corrupti? Unde repellendus beatae temporibus quod, mollitia incidunt amet aliquid, dolorem atque repudiandae, tempore exercitationem sequi!",
    date: "8/03/22",
    status: "pending",
  },
];

function Testimonial() {
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [tests, setTestimonials] = useState([]);
  const [selectedId, setSeletedId] = useState("");

  const getTestimonials = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/testimonials");
      setTestimonials(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  async function verifyTest(id) {
    setSeletedId(id);
    try {
      setVerifyLoading(true);
      const { data } = await axios.put(`/api/testimonials/approve/${id}`);
      setVerifyLoading(false);
      toast.success("testimonial approved succesfully");
      getTestimonials();
    } catch (err) {
      setVerifyLoading(false);
      console.log(err);
    }
    setSeletedId("");
  }

  //   useEffect(() => {
  //     getTestimonials();
  //   }, []);

  return (
    <div>
      <Sidebar />
      <div className="ml-[240px]">
        <div className="bg-white shadow-md p-2">
          <h1 className="text-2xl font-[600]">
            Reviews or Testimonials from users on coinbox.
          </h1>
          <p className="text-gray-600">
            testimonials will be shown on coinbox only if you've approved them
            ,use the approve button to approve a testimonial after you've gone
            through it.
          </p>
        </div>
        {/* mapping div */}
        <div className="bg-white shadow-md rounded-sm">
          <div className=" p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {testimonials.length >= 1 &&
              testimonials.map((item) => (
                <div
                  className="my-2 border border-slate-200 rounded-sm p-2"
                  key={item._id}
                >
                  <div className="my-2 flex items-center justify-between">
                    <h3 className="font-[600]">Status:</h3>
                    <span className="font-[600] text-green-600">
                      {item.status}
                    </span>
                  </div>
                  <div className="my-2 flex items-center justify-between">
                    <h3 className="font-[600]">User:</h3>
                    <span>{item.owner}</span>
                  </div>
                  <div className="my-2 flex items-center justify-between">
                    <h3 className="font-[600]">Date:</h3>
                    <span>{item.date}</span>
                  </div>
                  <div className="my-2 flex flex-col items-start justify-between">
                    <h3 className="font-[600]">Reveiw:</h3>
                    <span className="text-gray-600">{item.text}</span>
                  </div>
                  <button
                    className="bg-green-600 text-white font-[600] w-full h-[37px] rounded-sm mt-4"
                    onClick={() => verifyTest(item._id)}
                  >
                    {verifyLoading ? (
                      <>{selectedId === item._id ? "Approving" : "Approve"}</>
                    ) : (
                      "Approve"
                    )}
                  </button>
                </div>
              ))}
          </div>
          {testimonials.length < 1 && (
            <h1 className="text-center text-2xl p-2">
              No testimonials or reviews written by users on coinbox yet.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
