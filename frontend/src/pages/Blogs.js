/** @format */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BlogPosts from "../components/BlogPosts";
import BlogLoader from "../components/BlogLoader";
import axios from "axios"

function Blogs() {
  const [blogs, setBlogs] = useState()
  const [loading, setLoading] = useState(false)
  
  return (
    <div>
      <motion.div>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="bg-blue-700 text-white h-[200px] mt-8 mb-6"
        >
          <div className="max-w-[1070px] mx-auto flex flex-col ">
            <h1 className="text-[50px] font-[900] mt-12">coinbox</h1>
            <p className="text-lg font-[600]">
              Stories from the easiest and most trusted place to buy and invest
              in crypto.{" "}
            </p>
          </div>
        </motion.div>
          <BlogPosts />
      </motion.div>
    </div>
  );
}

export default Blogs;
