import React, { useState } from "react";

const TA_Feedback = () => {
  const initialData = [
    { id: 1, name: "Item-1", description: "Description 1" },
    { id: 2, name: "Item 2", description: "Description 2" },
    // Add more initial data if needed
  ];

  const [data, setData] = useState(initialData);
  const [editableItemId, setEditableItemId] = useState(null);

  const handleEdit = (id) => {
    setEditableItemId(id);
  };

  const handleSave = (id) => {
    setEditableItemId(null);
  };

  const handleCancel = () => {
    setEditableItemId(null);
  };

  const handleInputChange = (e, id) => {
    const { value } = e.target;
    const newData = data.map((item) =>
      item.id === id ? { ...item, description: value } : item
    );
    setData(newData);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const renderRows = () => {
    return data.map((item) => (
      <tr key={item.id}>
        <td className="border px-4 py-2">{item.id}</td>
        <td className="border px-4 py-2">{item.name}</td>
        <td className="border px-4 py-2">
          {editableItemId === item.id ? (
            <input
              type="text"
              value={item.description}
              onChange={(e) => handleInputChange(e, item.id)}
              className="form-input"
            />
          ) : (
            item.description
          )}
        </td>
        <td className="border px-4 py-2">
          <button
          style={{background:'#eb3434'}}
            className=" hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex justify-center m-12">
      <table className="table-auto  border-solid border-black">
        <thead className="bg-gray-400">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default TA_Feedback;
