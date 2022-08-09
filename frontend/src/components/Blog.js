/** @format */
import React from "react";
import moment from "moment";

function Blog({ blog }) {
  return (
    <div className="mt-[100px]">
      <div className="max-w-[670px] w-full mb-10">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="h-[370px] w-[600px] object-contain p-2"
        />
        <div className="flex flex-col">
          <h1 className="p-2 text-[30px] font-[700]">{blog?.title}</h1>
          <div className="flex items-center  text-gray-600 font-[600] p-2">
            <p> {moment(blog?.createdAt).format("LL")}</p>
            {" . "}
            <span className="ml-2 font-[700]">
              {""} {blog?.minuteRead} min read
            </span>
          </div>
          <h3 className="text-gray-600 text-lg p-2">{blog?.content}</h3>
        </div>
      </div>
    </div>
  );
}

export default Blog;
