import React from "react";

const DropdownAndActions = ({
  onAddStudent,
  selectedCohort,
  setSelectedCohort,
  selectedCourse,
  setSelectedCourse,
}) => {
  return (
    <div className="flex justify-between items-center p-4 text-textBlue">
      {/* Left Section: Dropdowns */}
      <div className="flex space-x-4">
        {/* Dropdown for Cohort */}
        <div className="relative">
          <select
            value={selectedCohort}
            onChange={(e) => setSelectedCohort(e.target.value)}
            className="appearance-none bg-gray-200 text-gray-800 py-2 px-7 rounded-md shadow-sm"
          >
            <option value="">AY 2024-25</option>
            <option value="AY 2023-24">AY 2023-24</option>
            <option value="AY 2022-23">AY 2022-23</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            ▼ 
          </div>
        </div>

        {/* Dropdown for Courses */}
        <div className="relative">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="appearance-none bg-gray-200 text-gray-800 py-2 px-4 rounded-md shadow-sm"
          >
            <option value="">CBSE 9</option>
            <option value="CBSE 10">CBSE 10</option>
            <option value="CBSE 11">CBSE 11</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            ▼
          </div>
        </div>
      </div>

      {/* Right Section: Add New Student Button */}
      <button
        onClick={onAddStudent}
        className="flex items-center bg-customGray text-textBlue py-2 px-4 rounded-md shadow-sm hover:bg-lightGray"
      >
        <span className="mr-2 text-lg">+</span>
        Add new Student
      </button>
    </div>
  );
};

export default DropdownAndActions;
