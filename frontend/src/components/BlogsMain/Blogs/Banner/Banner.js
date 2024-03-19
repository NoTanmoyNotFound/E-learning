<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bannerBody px-4 py-32 mx-auto text-wrap" style={{background: "linear-gradient(#C3C4FC, #BBC4FB, #B1C4FC, #AAC3FC)"}}>
      <div className="text-white text-center">
        <h1 className="text-5xl lg:7xl leading-snug font-bold mb-5 text-pretty" style={{textShadow:"2px 3px 7px black"}}>
          Learn skills from online courses with certificates
        </h1>
        <p className="text-gray-300 lg: w-3/5 mx-auto mb-5" style={{color:"#DDF0FF", fontWeight:"600",textShadow:"1px 2px 3px black", fontSize:"1.6rem"}}>
          1000+ Free Courses, Live Sessions by Experts, and Job Opportunities
          from 3100+ Companies. Join 1 Crore+ learners to build your dream
          career now!
        </p>
        <div>
          <Link
            to=""
            className="font-medium hover:text-purple-600 inline-flex items-center py-1"
          >
            learn More
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
=======
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bannerBody px-4 py-32 mx-auto text-wrap" style={{background: "linear-gradient(#C3C4FC, #BBC4FB, #B1C4FC, #AAC3FC)"}}>
      <div className="text-white text-center">
        <h1 className="text-5xl lg:7xl leading-snug font-bold mb-5 text-pretty" style={{textShadow:"2px 3px 7px black"}}>
          Learn skills from online courses with certificates
        </h1>
        <p className="text-gray-300 lg: w-3/5 mx-auto mb-5" style={{color:"#DDF0FF", fontWeight:"600",textShadow:"1px 2px 3px black", fontSize:"1.6rem"}}>
          1000+ Free Courses, Live Sessions by Experts, and Job Opportunities
          from 3100+ Companies. Join 1 Crore+ learners to build your dream
          career now!
        </p>
        <div>
          <Link
            to=""
            className="font-medium hover:text-purple-600 inline-flex items-center py-1"
          >
            learn More
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
>>>>>>> 38aee47d5fbd111cbc171fd84c2c9d21da9a756e
