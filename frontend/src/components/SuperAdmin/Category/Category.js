import React, { useState, useEffect } from 'react'
import { HiMiniIdentification } from "react-icons/hi2";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Category.css';

const Category = () => {


    const [search, setSearch] = useState('');
    const [formData, setFormData] = useState({ title: '' });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [categories, setCategories] = useState([]);



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();

        try {
            const res = await fetch("http://localhost:8000/api/super/categoryUploads", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);
                setFormData({ title: '' });
                setError('');
            } else {
                setError(data.error);
                setSuccess(false);
            }
        } catch (error) {
            console.error("Error occurred during fetch:", error);
            setError("An error occurred. Please try again later.");
            setSuccess(false);
        }
    };




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




    const handleDeleteCategory = async (categoryId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/super/categoryDelete/${categoryId}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (data.success) {
                fetchCategoryData();
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };




    return (
        <div>
            <div className="pr-7 lg:pr-72 w-screen py-5 pl-7">
                <div className="text-5xl font-bold text-center">
                    <h1>Course Categories</h1>
                </div>
                <div>
                    <div className="flex justify-end mt-5 mb-3 p-3 main-cat-top">
                        <form>
                            <div className="relative">
                                <div className="absolute top-1 left-1 bg-white-mediam rounded-full p-2  flex items-center justify-center text-blue-300">
                                    <i className="fa-solid fa-magnifying-glass" />
                                </div>
                                <input type="text" placeholder='Search Category' onChange={(e) => setSearch(e.target.value)} className='w-80 bg-white-light py-2 px-12 rounded-full border border-[#000] focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-[#bdbcbc] focus:drop-shadow-lg' />
                            </div>
                        </form>
                        <div className="add-category">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Add
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <form onSubmit={handleSubmit}>
                                                <h5 className="modal-title heading-title-add">Add Course Category</h5>
                                                {error && <div className="error">{error}</div>}
                                                {success && <div className="success">Category uploaded successfully</div>}
                                                <div className="category-add-form">
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        placeholder="Enter the title"
                                                        className="form-control inp-cat"
                                                        value={formData.title}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <button type="submit" className="btn btn-success rounded save-btn">
                                                        Save Now
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-[#ead0d0] dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    {/* <th scope="col" className="px-6 py-3">
                                        Edit
                                    </th> */}
                                    <th scope="col" className="px-6 py-3">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories && categories.filter((item) => {
                                return search.toLowerCase() === ''
                                    ? item
                                    : item.title.toLowerCase().includes(search);
                               }).map((category, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {category.title}
                                        </td>
                                        {/* <td className="px-6 py-4">
                                            {category.phone}
                                        </td> */}
                                        <td className="px-6 py-4">
                                            <ImCross className='deletebtnn' color="red" onClick={() => handleDeleteCategory(category._id)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;
