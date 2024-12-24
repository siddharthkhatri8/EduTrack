const API_BASE_URL = "http://localhost:5000/api";

export const getStudents = async () => {
  const response = await fetch(`${API_BASE_URL}/students`);
  return response.json();
};

export const addStudent = async (student) => {
  const response = await fetch(`${API_BASE_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return response.json();
};
