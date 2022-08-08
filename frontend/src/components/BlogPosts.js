/** @format */
import React from "react";
import blogs from "../data/blogs";


function BlogPosts() {
  return (
    <div className="mt-[60px]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1070px] mx-auto mb-8">
        {blogs.map((blog) => (
          <div className="hover:shadow-md border-md mx-2 h-full">
            <img src={blog?.image} className="h-[200px] w-full"/>
            <h1 className="text-[25px] text-black mb-2 font-[700] p-2">{blog?.title}</h1>
            <div className="flex items-center mt-[5px] text-gray-600 font-[600] p-2">
              <p>june 16 . </p>{" "}
              <span className="ml-2">{" "}3 min read</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPosts;
