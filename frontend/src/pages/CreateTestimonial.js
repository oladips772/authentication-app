/** @format */
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

function CreateTestimonial() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const CreateTestimonial = async () => {
    if (!text.trim()) return;
    try {
      setLoading(true);
      const { data } = await axios.post("/api/testimonials/create", {
        owner: "",
        text,
      });
      console.log(data)
      setLoading(false);
      toast.success("reveiew submitted successfully");
      setText("");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-[1070px] mt-[130px] mx-auto p-2">
        <h1 className="text-[35px] font-[600]">
          Tell us what you think of capicoin.
        </h1>
        <p className="text-lg font-[500]">
          Write a testimonial or a reveiw about capicoin and your first
          withdrawal
        </p>
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Feeback</label>
          <textarea
            disabled={loading}
            className="p-2 max-w-[600px] h-[400px] w-full resize-none outline-none border border-slate-500 rounded-sm"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={CreateTestimonial}
          disabled={loading}
          className="bg-blue-700 text-white max-w-[600px] w-full mt-8 h-[40px] font-[500] rounded-[25px]"
        >
          {loading ? "Submitting" : "Submit"}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default CreateTestimonial;
