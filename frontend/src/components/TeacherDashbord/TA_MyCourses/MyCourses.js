import React, { useEffect, useState } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "../../../firebase";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";


const MyCourses = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [videoFile, setVideoFile] = useState(null);
  const [previewVideoFile, setPreviewVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [inputs, setInputs] = useState({
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
      await axios.post(`http://localhost:8000/api/upload/course`, {
        ...inputs,
      });
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

  // Add a new function to handle category selection
  const handleCategoryChange = (e) => {
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

  const [categories, setCategories] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const fetchCategoryData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/super/getCategoryData');
      const responseData = await response.json();
      if (responseData.success) {
        setCategories(responseData.data);
        setError('');
      } else {
        setError(responseData.error);
      }
    } catch (error) {
      console.error('Error fetching category data:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <div className="bodypart   flex items-center justify-center w-full  " >
      <div className="main scroll_main_inner bg-white p-8 rounded-lg shadow-lg" style={{ width: '95%', height: 'auto', overflowY: 'auto', WebkitScrollbar: 'display: none', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <h1 className="headName text-3xl font-semibold mb-4 text-center">
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
              value={inputs.name}
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
              value={inputs.author}
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
              value={inputs.description}
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
            <select name="category" id="category" style={{ color: 'black', width: '100%' }} onChange={handleCategoryChange} value={inputs.category}>
              <option value="">Select Category</option>
              {categories.map(category => (
                <option value={category.id} key={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
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
              htmlFor="discount"
              className="form-label block mb-2 text-sm font-semibold"
            >
              Discount
            </label>
            <input
              type="text"
              id="discount"
              name="discount"
              value={inputs.discount}
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
              value={inputs.discountPercentage}
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
              value={inputs.examUrl}
              onChange={handleInputChange}
              className="form-input w-full border rounded px-4 py-2"
            />
          </div>


          <button type="submit" class="button3" style={{ width: '100%' }}>SUBMIT</button>


        </form>
      </div>
    </div>
  );
};

export default MyCourses;
