import React from "react";

const TA_Payment = () => {
  // Define JSON data
  const jsonData = [
    {
      id: 1,
      name: "Tanmoy Das",
      position: "Empolyee",
      office: "Pune",
      start_date: "2024-04-25",
      salary: "$800",
    },
    {
      id: 2,
      name: "Pabitra Mandol",
      position: "Student",
      office: "Kolkata",

      start_date: "2024-07-25",
      salary: "$750",
    },
    {
      id: 3,
      name: "Sukalayan Adhikari",
      position: "Student",
      office: "Kolkata",

      start_date: "2024-07-25",
      salary: "$50",
    },
    {
      id: 4,
      name: "Saklin Mustak",
      position: "Student",
      office: "Kolkata",

      start_date: "2024-07-25",
      salary: "$120",
    },

    {
      id: 5,
      name: "Aman Mahish",
      position: "Student",
      office: "Ghatal",

      start_date: "2024-07-25",
      salary: "$120",
    },
    // Add more data here
  ];

  // Render table rows
  const renderRows = () => {
    return jsonData.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.position}</td>
        <td>{item.office}</td>

        <td>{item.start_date}</td>
        <td>{item.salary}</td>
      </tr>
    ));
  };

  return (
    <div className=" m-12">
      <table
        id="example"
        className="table table-striped shadow-lg bg-white rounded-lg overflow-hidden "
        style={{ width: "50%" }}
      >
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Occupation
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payments
            </th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default TA_Payment;
