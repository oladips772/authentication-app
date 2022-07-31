/** @format */
import { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

function CreateContent() {
  const imagePicker = useRef();
  const videoPicker = useRef();
  const [selectedImage, setSelectedImage] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedImage(readerEvent.target.result);
    };
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[240px]  h-[100vh] flex justify-center items-center w-full">
        <div className="flex flex-col items-center  max-w-[900px] h-[400px] w-full bg-white shadow-md p-5 rounded-md -mt-8">
          <input
            type="text"
            placeholder="Title"
            className="outline-none border border-slate-600 h-[40px] rounded w-[50%] p-2 mt-2"
          />
          <textarea
            placeholder="Content body..."
            className="w-[50%] min-h-[200px] max-h-[400px] overflow-y-scroll outline-none border border-slate-600 p-2 mt-2"
          />
          <input
            type="file"
            placeholder="Title"
            hidden
            ref={imagePicker}
            onChange={handleChange}
          />
          <input
            type="file"
            accept="video"
            placeholder="Title"
            hidden
            ref={videoPicker}
          />
          <div className="flex items-center space-x-6 mt-2">
            <PhotoCameraOutlinedIcon
              className="h-[30px] text-green-600"
              style={{ height: 30, width: 30 }}
            />
            <VideocamOutlinedIcon
              className="h-[30px] text-green-600"
              style={{ height: 40, width: 40 }}
            />
          </div>
          <button className="bg-black text-white rounded w-[50%] mt-4 h-[40px] text-sm font-[500]">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
