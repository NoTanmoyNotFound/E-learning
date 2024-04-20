import React, { useState } from "react";

const MyCourses = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setVideoPreview(URL.createObjectURL(file));
    // Automatically set the thumbnail when a video is uploaded
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handlePaymentChange = (e) => {
    // Ensure that negative numbers are not accepted
    const amount = Math.max(0, parseInt(e.target.value));
    setPaymentAmount(amount);
  };

  const handleDone = () => {
    // Perform action when "Done" button is clicked
    console.log("Course Uploaded:", {
      title,
      videoFile,
      thumbnailFile,
      paymentAmount,
    });
    // Reset state
    setVideoFile(null);
    setTitle("");
    setVideoPreview("");
    setThumbnailFile(null);
    setThumbnailPreview("");
    setPaymentAmount("");
  };

  return (
    <div className="container mt-12 mx-auto max-w-xl p-4 bg-blue-100 rounded-lg shadow-md ">
      <h2 className="text-lg font-semibold mb-4">Upload Courses</h2>
      <div className="flex flex-col mb-4">
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="mb-2"
        />
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={handleTitleChange}
          className="border rounded-md p-2"
        />
      </div>
      {videoPreview && (
        <div className="video-preview mb-4">
          <video controls className="w-full h-auto">
            <source src={videoPreview} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleThumbnailChange}
          className="mb-2"
        />
        {thumbnailPreview && (
          <img
            src={thumbnailPreview}
            alt="Custom_Thumbnail"
            className="w-full h-auto"
          />
        )}
      </div>
      <div className="mb-4 flex items-center">
        <span className="mr-2">&#8377;</span> {/* Rupee symbol */}
        <input
          type="number"
          placeholder="Enter Amount"
          value={paymentAmount}
          onChange={handlePaymentChange}
          min="0"
          className="border rounded-md p-2 w-1/2"
        />
      </div>
      <button
        onClick={handleDone}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Done
      </button>
    </div>
  );
};

export default MyCourses;
