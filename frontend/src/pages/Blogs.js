/** @format */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BlogPosts from "../components/BlogPosts";
import BlogLoader from "../components/BlogLoader";
import axios from "axios";
import Footer from "../components/Footer";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/news");
      setBlogs(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <motion.div>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="bg-blue-700 text-white h-[100%] mt-8 mb-[70px]"
        >
          <div className="max-w-[1070px] mx-auto flex flex-col p-2">
            <h1 className="text-[50px] font-[900] mt-12 pt-4">coinbox</h1>
            <p className="text-lg font-[600] pb-4">
              Stories from the easiest and most trusted place to buy and invest
              in crypto.{" "}
            </p>
          </div>
        </motion.div>
        <>{loading ? <BlogLoader /> : <BlogPosts blogs={blogs} />}</>
      </motion.div>
        <Footer />
    </div>
  );
}

export default Blogs;
