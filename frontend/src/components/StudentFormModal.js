import React, { useState } from "react";
import axios from 'axios';


const StudentFormModal = ({ closeModal, fetchStudents }) => {
  const [formData, setFormData] = useState({
    name: "",
    cohort: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to add the student
      await axios.post("http://localhost:5000/api/students", formData);
      fetchStudents(); // Fetch updated students list
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Cohort</label>
            <input
              type="text"
              name="cohort"
              value={formData.cohort}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="bg-customGray text-textBlue py-2 px-4 rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentFormModal;
