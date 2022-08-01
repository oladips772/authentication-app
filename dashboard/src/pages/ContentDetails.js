/** @format */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import loader from "../components/big-loader.png";
import smallLoader from "../components/loader.png";
import moment from "moment";
import Sidebar from "../components/Sidebar";

function ContentDetails() {
  const [news, setNews] = useState("");
  const [updateLoading, setUpdateloading] = useState(false);
  const [deleteLoading, setDeleteloading] = useState(false);
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [title, setTitle] = useState("");
  const [cloudLoading, setCloudLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  let params = useParams();
  const contentId = params.id;
  const navigate = useNavigate();

  // ? getting details
  const getDetail = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/news/${contentId}`);
      setNews(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err?.response.data.message);
    }
  };

  const handleCreate = async () => {
    if (!selectedImage) return;
    setCloudLoading(true);
    const data = new FormData();
    data.append("file", selectedImage);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dsbhrtd0o/image/upload",
        data
      );
      const { url } = uploadRes.data;
      setImage(url);
      console.log(uploadRes.data);
    } catch (err) {
      console.log(err);
      err && toast.error(`${err.message}, reselect the image please`);
    }
    setCloudLoading(false);
  };

  const handleChange = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedImage(readerEvent.target.result);
    };
    console.log(selectedImage);
  };

  // ? updating function
  const handleSubmit = async () => {
    if (!image) return;
    try {
      setUpdateloading(true);
      const { data } = await axios.put(`/api/news/update/${contentId}`, {
        title,
        content,
        image,
      });
      toast.success("content updated successfully");
      setUpdateloading(false);
    } catch (err) {
      setUpdateloading(false);
      toast.error(err.response.data);
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleteloading(true);
      const { data } = await axios.delete(`/api/news/delete/${contentId}`);
      toast.success("content deleted successfully");
      navigate("/Contents");
      setDeleteloading(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (selectedImage) {
      handleCreate();
    }
  }, [selectedImage]);

  useEffect(() => {
    getDetail();
  }, [contentId]);

  useEffect(() => {
    if (news) {
      setTitle(news.title);
      setContent(news.content);
      setImage(news.image);
    }
  }, [contentId, news]);

  return (
    <div className="">
      <Sidebar />
      <div className="ml-[240px] bg-white h-[100vh]  shadow-md">
        <div className="bg-white shadow-md p-4 mb-4">
          <h1 className="text-2xl font-[500]">
            You can edit and delete contents here.
          </h1>
          <p className="text-slate-600">
            click the update button to update or make changes to your content.
          </p>
        </div>
        <div className="flex flex-col p-5 rounded-md max-w-[600px] w-full">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="outline-none border border-slate-600 h-[40px] rounded w-[100%] p-2 mt-2 placeholder:text-slate-600"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content body..."
            className="w-[100%] min-h-[200px] max-h-[400px] overflow-y-scroll outline-none border border-slate-600 p-2 mt-2 placeholder:text-slate-600 resize-none rounded"
          />
          <input type="file" onChange={handleChange} className="mt-2" />
          <div className="flex items-center space-x-6 mt-2"></div>
          <button
            onClick={handleSubmit}
            className="bg-black text-white rounded w-[100%] mt-4 h-[40px] text-sm font-[500] flex items-center justify-center"
            disabled={cloudLoading || loading}
          >
            {updateLoading ? (
              <img src={smallLoader} alt="" className="h-[17px] w-[17px]" />
            ) : (
              "Update"
            )}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-800 text-white rounded w-[100%] mt-4 h-[40px] text-sm font-[500] flex items-center justify-center"
            disabled={cloudLoading || loading}
          >
            {deleteLoading ? (
              <img src={smallLoader} alt="" className="h-[17px] w-[17px]" />
            ) : (
              "Delete"
            )}
          </button>
        </div>
        <div className="shadow-md"></div>
      </div>
    </div>
  );
}

export default ContentDetails;
