import { useState } from "react";
import axios from "axios";

const StudentForm = ({ fetchStudents }) => {
  const [formData, setFormData] = useState({
    name: "",
    cohort: "",
    courses: "",
    lastLogin: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students", {
        ...formData,
        courses: formData.courses.split(","),
        lastLogin: new Date(formData.lastLogin),
      });
      fetchStudents();
      setFormData({ name: "", cohort: "", courses: "", lastLogin: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Student</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        name="cohort"
        value={formData.cohort}
        onChange={handleChange}
        placeholder="Cohort"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        name="courses"
        value={formData.courses}
        onChange={handleChange}
        placeholder="Courses (comma-separated)"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="datetime-local"
        name="lastLogin"
        value={formData.lastLogin}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <button className="px-4 py-2 bg-backWhite text-white rounded">
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
