/** @format */
import React from "react";
import moment from "moment";
import axios from "axios";

function Blog({ blog }) {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const blogId = blog?._id;

  const getOtherBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/news/otherblogs", blogId);
      setBlogs(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  React.useEffect(() => {
    getOtherBlogs();
  }, []);

  return (
    <div className="mt-[100px]">
      <div className="max-w-[670px] w-full mb-14">
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
      {/* other blogs container */}
      <div className="max-w-[670px] w-full mb-10">
        <h1 className="text-3xl font-[600]">Read More</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2"></div>
      </div>
    </div>
  );
}

export default Blog;
