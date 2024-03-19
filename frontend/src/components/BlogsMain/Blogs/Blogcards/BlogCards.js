<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <div className="grid  md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-8 " id="cardsblogs">
        {filteredBlogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
            <div>
              <img src={blog.image} alt={blog.title} className="w-full" />
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-700 cursor-pointer">
              {blog.title}
            </h3>
            <p className="mb-2  text-gray-400">
              <FaUser className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-500">
              Publised: {blog.published_date}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogCards;
=======
import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <div className="grid  md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-8 " id="cardsblogs">
        {filteredBlogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
            <div>
              <img src={blog.image} alt={blog.title} className="w-full" />
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-700 cursor-pointer">
              {blog.title}
            </h3>
            <p className="mb-2  text-gray-400">
              <FaUser className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-500">
              Publised: {blog.published_date}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogCards;
>>>>>>> 38aee47d5fbd111cbc171fd84c2c9d21da9a756e
