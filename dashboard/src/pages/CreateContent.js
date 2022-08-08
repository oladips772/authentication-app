/** @format */
import { useRef, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import toast from "react-hot-toast";
import loader from "../components/loader.png";

function CreateContent() {
  const [selectedImage, setSelectedImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [minuteRead,setMinuteRead] = useState("");
  const [cloudLoading, setCloudLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

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

  useEffect(() => {
    if (selectedImage) {
      handleCreate();
    }
  }, [selectedImage]);

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

  const handleSubmit = async () => {
    if (!image) return;
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/news/create`, {
        title,
        content,
        minuteRead,
        image,
      });
      toast.success("created content successfully");
      setTitle("");
      setContent("");
      setMinuteRead("");
      setImage(null);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[240px] h-[100vh] w-full bg-white">
        <h1 className="text-3xl p-4 w-full border-b border-slate-200 shadow-sm">
          Create contents here..
        </h1>
        <div className="flex flex-col p-5 rounded-md max-w-[1100px] w-full">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="outline-none border border-slate-600 h-[40px] rounded w-[60%] p-2 mt-2 placeholder:text-slate-600"
          />
          <input
            value={minuteRead}
            onChange={(e) => setMinuteRead(e.target.value)}
            type="number"
            placeholder="Minutes read"
            className="outline-none border border-slate-600 h-[40px] rounded w-[60%] p-2 mt-2 placeholder:text-slate-600"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content body..."
            className="w-[60%] min-h-[200px] max-h-[400px] overflow-y-scroll outline-none border border-slate-600 p-2 mt-2 placeholder:text-slate-600 resize-none rounded"
          />
          <input type="file" onChange={handleChange} className="mt-2" />
          <div className="flex items-center space-x-6 mt-2"></div>
          <button
            onClick={handleSubmit}
            className="bg-black text-white rounded w-[60%] mt-4 h-[40px] text-sm font-[500] flex items-center justify-center"
            disabled={cloudLoading || loading}
          >
            {loading ? (
              <img src={loader} alt="" className="h-[17px] w-[17px]" />
            ) : (
              "Publish"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
