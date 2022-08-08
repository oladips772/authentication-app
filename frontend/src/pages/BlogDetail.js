/** @format */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BlogDetail() {
  let params = useParams();
  const blogId = params.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  const getBlog = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/news/${blogId}`);
      console.log(data);
      setBlog(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return <div>BlogDetail</div>;
}

export default BlogDetail;
