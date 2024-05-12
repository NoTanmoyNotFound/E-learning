import React, { useEffect, useState } from "react";
import "./MyCourses.css";
import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../../firebase";
import { FaSpinner } from "react-icons/fa"; // Assuming you're using FontAwesome icons

const MyCourses = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
  });
  const [videoUploaded, setVideoUploaded] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [videoPerc, setVideoPerc] = useState(0);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoInputKey, setVideoInputKey] = useState(Date.now()); // Add key for video input
  const [thumbnailInputKey, setThumbnailInputKey] = useState(Date.now()); // Add key for thumbnail input

  useEffect(() => {
    if (videoFile) {
      uploadFile(videoFile, "videoUrl");
      setVideoPreview(URL.createObjectURL(videoFile));
    }
  }, [videoFile]);

  useEffect(() => {
    if (thumbnailFile) {
      uploadFile(thumbnailFile, "imageUrl");
    }
  }, [thumbnailFile]);

  const uploadFile = async (file, fileType) => {
    const storage = getStorage(app);
    const folder = fileType === "image" ? "images/" : "videos/";
    const filename = new Date().getTime() + "_" + file.name;
    const storageRef = ref(storage, folder + filename);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (fileType === "image") {
          setImgPerc(Math.round(progress));
        } else {
          setVideoPerc(Math.round(progress));
        }
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at:", downloadURL);
          if (fileType === "image") {
            setInputs((prev) => ({
              ...prev,
              [fileType]: downloadURL,
            }));
            setImageUploaded(true);
          } else {
            setInputs((prev) => ({
              ...prev,
              [fileType]: downloadURL,
            }));
            setVideoUploaded(true);
          }
          if (videoUploaded && imageUploaded) {
            await handleSubmit(); // Call handleSubmit when both files are uploaded
          }
        } catch (error) {
          console.error("Error getting download URL:", error);
        }
      }
    );
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:8000/api/upload/course`, {
        ...inputs,
      });
      // Reset form after successful submission
      setInputs({
        name: "",
        author: "",
        description: "",
        price: "",
        duration: "",
      });
      setVideoFile(null);
      setThumbnailFile(null);
      setVideoUploaded(false);
      setImageUploaded(false);
      setVideoPerc(0);
      setImgPerc(0);
      setVideoPreview(null);
      setVideoInputKey(Date.now()); // Update key to force re-render of video input
      setThumbnailInputKey(Date.now()); // Update key to force re-render of thumbnail input
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="bodypart bg-gray-100  flex items-center justify-center ml-64 w-3/4 mt-4 mb-2 ">
      <div className="main bg-white p-8 rounded-lg shadow-lg">
        <h1 className="headName text-3xl font-semibold mb-4">
          Course Upload Form
        </h1>
        <form className="formSec" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label
              htmlFor="video"
              className="form-label block mb-2 text-sm font-semibold"
            >
              Video
            </label>
            <input
              key={videoInputKey} // Add key prop for video input
              type="file"
              accept="video/*"
              id="video"
              onChange={(e) => setVideoFile(e.target.files[0])}
            />
            {videoUploaded && (
              <div className="progress-bar">Video uploaded successfully</div>
            )}
            {videoFile && !videoUploaded && (
              <div className="uploading-icon">
                <FaSpinner className="spinner-icon" />
                <span>Uploading video... {videoPerc}%</span>
              </div>
            )}
            {videoPreview && <video src={videoPreview} controls />}
          </div>

          <div className="mb-6">
            <label
              htmlFor="img"
              className="form-label block mb-2 text-sm font-semibold"
            >
              Thumbnail Image
            </label>
            <input
              key={thumbnailInputKey}
              type="file"
              accept="image/*"
              id="img"
              onChange={(e) => setThumbnailFile(e.target.files[0])}
            />
            {imageUploaded && (
              <div className="progress-bar">
                Thumbnail uploaded successfully
              </div>
            )}
            {imageUploaded && (
              <div className="uploading-icon">Image uploaded successfully</div>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="form-label block mb-2 text-sm font-semibold"
            >
              Course Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleInputChange}
              className="form-input w-full border rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="form-label block mb-2 text-sm font-semibold"
            >
              Author Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={inputs.author}
              onChange={handleInputChange}
              className="form-input w-full border rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="form-label block mb-2 text-sm font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={inputs.description}
              onChange={handleInputChange}
              className="form-textarea w-full border rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="price"
              className="form-label block mb-2 text-sm font-semibold"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={inputs.price}
              onChange={handleInputChange}
              className="form-input w-full border rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="duration"
              className="form-label block mb-2 text-sm font-semibold"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={inputs.duration}
              onChange={handleInputChange}
              className="form-input w-full border rounded px-4 py-2"
            />
          </div>

          <button  type="submit" class="button3" style={{width:'100%'}}>SUBMIT</button>


        </form>
      </div>
    </div>
  );
};

export default MyCourses;
