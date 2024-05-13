import React, { useEffect, useState } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "../../../firebase";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux"; 
import { useParams } from "react-router-dom";

function ChangeCourse() {
    const { courseId } = useParams();
    const { currentUser } = useSelector((state) => state.user);
    const [comeData , setComedata] = useState({});
    const [videoFile, setVideoFile] = useState(null);
    const [previewVideoFile, setPreviewVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [inputs, setInputs] = useState({
      authorEmail: currentUser.email,
    });
    const [videoUploaded, setVideoUploaded] = useState(false);
    const [previewVideoUploaded, setPreviewVideoUploaded] = useState(false);
    const [imageUploaded, setImageUploaded] = useState(false);
    const [videoPerc, setVideoPerc] = useState(0);
    const [previewVideoPerc, setPreviewVideoPerc] = useState(0);
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPreview, setVideoPreview] = useState(null);
    const [previewVideoPreview, setPreviewVideoPreview] = useState(null);
    const [videoInputKey, setVideoInputKey] = useState(Date.now());
    const [previewVideoInputKey, setPreviewVideoInputKey] = useState(Date.now());
    const [thumbnailInputKey, setThumbnailInputKey] = useState(Date.now());


    useEffect(() => {
      const fetchCourseDetails = async () => {
        try {
          const response = await fetch(`/api/teacher/singleCourse/${courseId}`);
          const data = await response.json();
          setComedata(data.data);
        //   setInputs(data.data);
          console.log(data.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchCourseDetails();
    }, [courseId]);
    console.log(comeData);




















  
    useEffect(() => {
      if (videoFile) {
        uploadFile(videoFile, "videoUrl");
        setVideoPreview(URL.createObjectURL(videoFile));
      }
    }, [videoFile]);








  
    useEffect(() => {
      if (previewVideoFile) {
        uploadFile(previewVideoFile, "previewVideoUrl");
        setPreviewVideoPreview(URL.createObjectURL(previewVideoFile));
      }
    }, [previewVideoFile]);
  
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
          } else if (fileType === "previewVideoUrl") {
            setPreviewVideoPerc(Math.round(progress));
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
            } else if (fileType === "previewVideoUrl") {
              setInputs((prev) => ({
                ...prev,
                [fileType]: downloadURL,
              }));
              setPreviewVideoUploaded(true);
            } else {
              setInputs((prev) => ({
                ...prev,
                [fileType]: downloadURL,
              }));
              setVideoUploaded(true);
            }
            if (videoUploaded && previewVideoUploaded && imageUploaded) {
              await handleSubmit(); // Call handleSubmit when all files are uploaded
            }
          } catch (error) {
            console.error("Error getting download URL:", error);
          }
        }
      );
    };
  
    const handleSubmit = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/upload/updateCourse/${courseId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });
        const data = await response.json();
        console.log(data);
        // Reset form after successful submission
        setInputs({
          name: "",
          author: "",
          authorEmail: currentUser.email,
          description: "",
          price: "",
          duration: "",
          category: "",
          discount: "",
          discountPercentage: "",
          examUrl: "",
        });
        setVideoFile(null);
        setPreviewVideoFile(null);
        setThumbnailFile(null);
        setVideoUploaded(false);
        setPreviewVideoUploaded(false);
        setImageUploaded(false);
        setVideoPerc(0);
        setPreviewVideoPerc(0);
        setImgPerc(0);
        setVideoPreview(null);
        setPreviewVideoPreview(null);
        setVideoInputKey(Date.now());
        setPreviewVideoInputKey(Date.now());
        setThumbnailInputKey(Date.now());
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

    console.log(inputs);
  
    return (
      <div className="bodypart   flex items-center justify-center ml-64 w-3/4 mt-4 mb-2 " >
        <div className="main bg-white p-8 rounded-lg shadow-lg" >
          <h1 className="headName text-3xl font-semibold mb-4">
            Course Upload 
          </h1>
          <form className="formSec" onSubmit={handleFormSubmit}>
            <div className="mb-6">
              <label
                htmlFor="video"
                className="form-label block mb-2 text-sm font-semibold"
              >
                Main Video
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
                htmlFor="previewVideo"
                className="form-label block mb-2 text-sm font-semibold"
              >
                Preview Video
              </label>
              <input
                key={previewVideoInputKey}
                type="file"
                accept="video/*"
                id="previewVideo"
                onChange={(e) => setPreviewVideoFile(e.target.files[0])}
              />
              {previewVideoUploaded && (
                <div className="progress-bar">Preview video uploaded successfully</div>
              )}
              {previewVideoFile && !previewVideoUploaded && (
                <div className="uploading-icon">
                  <FaSpinner className="spinner-icon" />
                  <span>Uploading preview video... {previewVideoPerc}%</span>
                </div>
              )}
              {previewVideoPreview && <video src={previewVideoPreview} controls />}
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
                defaultValue={comeData.name}
                onChange={handleInputChange}
                className="form-input w-full border rounded px-4 py-2"
              />
            </div>
  
            <div className="mb-6">
              <label
                htmlFor="author"
                className="form-label block mb-2 text-sm font-semibold"
              >
                Author Name
              </label>
              <input
                type="text"
                id="author"
                name="author"
                defaultValue={comeData.author}
                onChange={handleInputChange}
                className="form-input w-full border rounded px-4 py-2"
              />
            </div>
  
            <div className="mb-6">
              <label
                htmlFor="authorEmail"
                className="form-label block mb-2 text-sm font-semibold"
              >
                Author Email
              </label>
              <input
                type="text"
                id="authorEmail"
                name="authorEmail"
                value={currentUser.email}
                
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
                defaultValue={comeData.description}
                onChange={handleInputChange}
                className="form-textarea w-full border rounded px-4 py-2"
              />
            </div>
  
            <div className="mb-6">
              <label
                htmlFor="category"
                className="form-label block mb-2 text-sm font-semibold"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                defaultValue={comeData.category}
                onChange={handleInputChange}
                className="form-input w-full border rounded px-4 py-2"
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
                defaultValue={comeData.price}
                onChange={handleInputChange}
                className="form-input w-full border rounded px-4 py-2"
              />
            </div>
  
            <div className="mb-6">
              <label
                htmlFor="discount"
                className="form-label block mb-2 text-sm font-semibold"
              >
                Discount
              </label>
              <input
                type="text"
                id="discount"
                name="discount"
                defaultValue={comeData.discount}
                onChange={handleInputChange}
                className="form-input w-full border rounded px-4 py-2"
              />
            </div>
  
            <div className="mb-6">
              <label
                htmlFor="discountPercentage"
                className="form-label block mb-2 text-sm font-semibold"
              >
                Discount Percentage
              </label>
              <input
                type="text"
                id="discountPercentage"
                name="discountPercentage"
                defaultValue={comeData.discountPercentage}
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
                defaultValue={comeData.duration}
                onChange={handleInputChange}
                className="form-input w-full border rounded px-4 py-2"
              />
            </div>
  
            <div className="mb-6">
              <label
                htmlFor="examUrl"
                className="form-label block mb-2 text-sm font-semibold"
              >
                Exam Url
              </label>
              <input
                type="text"
                id="examUrl"
                name="examUrl"
                defaultValue={comeData.examUrl}
                onChange={handleInputChange}
                className="form-input w-full border rounded px-4 py-2"
              />
            </div>
  
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default ChangeCourse
