import React from "react";
import "./Maincourse.css";

function MainCourse() {
  return (
    <div className="maincourse">
    <button className="floating-btn">
        <a href="/Allcourses">
          <i class="fa-solid fa-angle-left"></i>
        </a>
      </button>
      {/* Video Section */}
      <div className="relative  overflow-hidden  video-section bg-black bg-opacity-25 d">
        <video
          className="w-30% m-12 rounded-lg ml-44 drop-shadow-xl"
          controls
          src="http://media.w3.org/2010/05/sintel/trailer.mp4"
        >
          Your browser does not support the video tag.
        </video>
        {/* Header under Video Section */}

        <h3 className="text-lg font-semibold ml-44 ">Video Title</h3>
        <p className="text-sm ml-44 mb-12">
          Description or additional information about the video.
        </p>
      </div>

      {/* Comments Section */}
      <div className="mt-4 ml-44">
        <h2 className="text-lg font-semibold">Comments</h2>
        <h2>dudu</h2>
        {/* Example: <Comments /> */}
      </div>
    </div>
  );
}

export default MainCourse;
