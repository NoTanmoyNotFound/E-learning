import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa";
import SideBar from "../Sidebar/SideBar";

const SingleBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);


  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Blog Data:", data);  // Log the response for debugging
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Error fetching blog data. Please try again later.");
      }
    };
  
    fetchBlogData();
  }, [id]);




  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogData) {
    return <div>Loading...</div>;
  }

  const {
    title,
    image,
    author,
    published_date,
    reading_time,
    content,
  } = blogData;

  return (
    <div className="m-3">
      <div className="py-4 px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
        {title}
        </h2>
      </div>
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row-reverse gap-12 ">
        <SideBar />
        <div className="lg:w-3/4 mx-auto">
          <img
            src={image}
            alt={title}
            className={`w-full mx-auto rounded ${imageLoading ? 'hidden' : 'block'}`}
            onLoad={() => setImageLoading(false)}
          />
          <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quia ullam provident voluptas atque quod sapiente corrupti hic nulla molestiae tempore nihil consequuntur facere quidem optio maxime voluptates ratione accusantium soluta cum. Illo quas enim adipisci corrupti ratione recusandae similique est quod, sed saepe qui quia porro facere a placeat.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas corporis quos vitae provident odit tenetur porro at totam, quibusdam deleniti natus sed perferendis soluta incidunt. Itaque consequuntur, quae atque, suscipit deleniti eaque officia accusamus, quaerat alias exercitationem ad eveniet minus enim quos adipisci repellendus aliquid aspernatur sequi tenetur iusto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
