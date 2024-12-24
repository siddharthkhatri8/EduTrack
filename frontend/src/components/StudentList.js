import axios from "axios";

const StudentList = ({ students, fetchStudents }) => {
  const getStatusDot = (status) => {
    return status === 'Active' ? (
      <span className="text-green-500 text-4xl">&#8226;</span> // Bigger green dot for active status
    ) : (
      <span className="text-red-500 text-4xl">&#8226;</span> // Bigger red dot for inactive status
    );
  };

  return (
    <div className="mt-4">
      <table className="w-full border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="border-b p-2">Student Name</th>
            <th className="border-b p-2">Cohort</th>
            <th className="border-b p-2">Courses</th>
            <th className="border-b p-2">Date Joined</th>
            <th className="border-b p-2">Last Logined</th>
            <th className="border-b p-2">Status</th> 
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="border-t border-b p-2">{student.name}</td>
              <td className="border-t border-b p-2">{student.cohort}</td>
              <td className="border-t border-b p-2">{student.courses.join(", ")}</td>
              <td className="border-t border-b p-2">{new Date(student.dateJoined).toLocaleDateString()}</td>
              <td className="border-t border-b p-2">
                {new Date(student.lastLogin).toLocaleString()}
              </td>
              <td className="border-t border-b p-2">{getStatusDot(student.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
