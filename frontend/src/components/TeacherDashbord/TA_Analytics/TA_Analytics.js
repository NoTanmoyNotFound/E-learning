import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./TA_Analytics.css";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

import { useNavigate } from "react-router-dom";

const TA_Analytics = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row w-full justify-center">
        <div className="gap-2 mx-4 h-full w-4/5 ">


        <div className="flex flex-row">
          <div
            style={{ backgroundColor: "#34D399" }}
            className="TA_container h-50 md:h-auto w-2/5 md:w-2/5 flex flex-2 flex-row mt-3 bg-green-300 rounded-md  p-4 cursor-pointer  shadow-lg bttn-enrollment justify-center items-center "
          >
            <div className="TA_Shoping">
              <IoPeopleCircleSharp size={50} className="text-black-500" />
            </div>
            <div className="sales ml-7">
              <h2 className="text-zinc-600 text-xl">Number of Enrollments</h2>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.5rem",
                  color: "#333",
                }}
              >
                400
              </p>
            </div>
          </div>

          <div
            style={{ backgroundColor: "#FFA500" }}
            className="TA_container h-50 md:h-auto w-2/5 md:w-2/5 flex flex-2 flex-row mt-3  rounded-md shadow-xl p-4 bttn-courses justify-center items-center"
          >
            <div className="TA_Shoping">
              <ImBooks size={50} className="text-blue-900" />
            </div>
            <div className="sales ml-7 cursor-pointer">
              <h2 className="text-zinc-600 text-xl">Number Of Courses</h2>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.5rem",
                  color: "#333",
                }}
              >
                20
              </p>
            </div>
          </div>


          </div>


          <div className="flex flex-row">
          <div className="TA_container h-70    md:h-auto w-2/5 md:w-2/5 flex  flex-row mt-3 rounded-md shadow-xl p-auto cursor-pointer  mb-2  bttn-sells justify-center items-center  ">
            <div className="TA_Shoping ">
              <FaShoppingCart size={50} className="text-stone-950" />
            </div>
            <div className="sales ml-7">
              <h2 className="text-zinc-600 text-xl">Total Sales</h2>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.5rem",
                  color: "#333",
                }}
              >
                700
              </p>
            </div>
          </div>




          {/* test  */}


          
          <div onClick={() => navigate("/teacherDashbord/TeacherProfile")} className="TA_container h-70    md:h-auto w-2/5 md:w-2/5 flex  flex-row mt-3 rounded-md shadow-xl p-auto cursor-pointer  mb-2  bttn-sells justify-center items-center  ">
            <div className="TA_Shoping ">
              <CgProfile size={50} className="text-stone-950" />
            </div>
            <div className="sales ml-7">
              <h2 className="text-zinc-600 text-xl">Profile Update</h2>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.5rem",
                  color: "#333",
                }}
              >
              
              </p>
            </div>
          </div> 
        </div>
        
      </div>
      </div>
  
      
      
    </>
  );
};

export default TA_Analytics;
