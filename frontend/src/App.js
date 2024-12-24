import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StudentList from "./components/StudentList";
import DropdownAndActions from "./components/DropdownAndActions"; // Import the Dropdown component
import StudentFormModal from "./components/StudentFormModal"; // Import the Modal component

const App = () => {
  const [activeSection, setActiveSection] = useState("Students");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCohort, setSelectedCohort] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  const fetchStudents = async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get("http://localhost:5000/api/students");
      setStudents(data);
    } catch (error) {
      setError("Failed to load students. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilteredStudents = async () => {
    setLoading(true);
    setError("");
    try {
      const queryParams = new URLSearchParams();
      if (selectedCohort) queryParams.append("cohort", selectedCohort);
      if (selectedCourse) queryParams.append("courses", selectedCourse);

      const { data } = await axios.get(
        `http://localhost:5000/api/students?${queryParams.toString()}`
      );
      setStudents(data);
    } catch (error) {
      setError("Failed to load students. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredStudents();
  }, [selectedCohort, selectedCourse]);

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="ml-64 w-full">
        <Topbar />
        {activeSection === "Students" && (
          <div className="p-4">
            {/* <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1> */}

            <DropdownAndActions
              onAddStudent={() => setIsModalOpen(true)} // Open the modal on button click
              selectedCohort={selectedCohort}
              setSelectedCohort={setSelectedCohort}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
            />

            {error && (
              <div className="text-red-500 mb-4">
                <p>{error}</p>
              </div>
            )}

            {loading ? (
              <div className="text-center mt-4">Loading students...</div>
            ) : (
              <>
                <StudentList students={students} fetchStudents={fetchStudents} />
              </>
            )}

            {/* Modal for Add New Student */}
            {isModalOpen && (
              <StudentFormModal 
                closeModal={() => setIsModalOpen(false)} 
                fetchStudents={fetchStudents} 
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
