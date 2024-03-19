<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Post</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blog/${blog.id}`}
                className="text-base pb-2 hover:text-purple-600 inline-flex items-center py-1"
              >
                Read More
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* popurlar pages */}

      <div>
        <h3 className="text-2xl font-semibold px-4">Popular Post</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blog/${blog.id}`}
                className="text-base pb-2 hover:text-purple-600 inline-flex items-center py-1"
              >
                Read More
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
=======
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Post</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blog/${blog.id}`}
                className="text-base pb-2 hover:text-purple-600 inline-flex items-center py-1"
              >
                Read More
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* popurlar pages */}

      <div className="">
        <h3 className="text-2xl font-semibold px-4 mt-20">Popular Post</h3>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link to={`/blogs/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">

                Read More
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
>>>>>>> 38aee47d5fbd111cbc171fd84c2c9d21da9a756e
