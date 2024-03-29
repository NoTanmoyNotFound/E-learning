import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./TA_Analytics.css";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TA_Analytics = () => {
  const data = [
    {
      name: "p1",
      value: "200",
    },
    {
      name: "p1",
      value: "100",
    },
    {
      name: "p2",
      value: "300",
    },
    {
      name: "p3",
      value: "400",
    },
    {
      name: "p4",
      value: "600",
    },
    {
      name: "p5",
      value: "900",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row  gap-8 mx-4">
          <div className="TA_container h-36 w-96 flex flex-2 flex-row mt-3 bg-green-300 rounded-md shadow-md p-4 cursor-pointer ">
            <div className="TA_Shoping">
              <IoPeopleCircleSharp size={50} className="text-black-500" />
            </div>
            <div className="sales ml-7">
              <h2 className="text-zinc-600 text-xl">Number of Enrollments</h2>
              <p className="mt-2 text-2xl">400</p>
            </div>
          </div>

          <div className="TA_container h-36 w-96 flex flex-2 flex-row mt-3 bg-orange-300 rounded-md shadow-md p-4 ">
            <div className="TA_Shoping">
              <ImBooks size={50} className="text-blue-900" />
            </div>
            <div className="sales ml-7 cursor-pointer">
              <h2 className="text-zinc-600 text-xl">Number Of Courses</h2>
              <p className="mt-2 text-2xl">20</p>
            </div>
          </div>

          <div className="TA_container h-36 w-96 flex flex-2 flex-row mt-3 bg-red-300 rounded-md shadow-md p-4 cursor-pointer ">
            <div className="TA_Shoping">
              <FaShoppingCart size={50} className="text-stone-950" />
            </div>
            <div className="sales ml-7">
              <h2 className="text-zinc-600 text-xl">Total Sales</h2>
              <p className="mt-2 text-2xl">700</p>
            </div>
          </div>
        </div>

        {/* graph */}
        <div className=" mt-10 flex justify-center ">
          <h2 className="">Data Chart </h2>
          <LineChart
            width={1000}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default TA_Analytics;
