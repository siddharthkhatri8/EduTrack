import { FaTachometerAlt, FaUserGraduate, FaQuestionCircle, FaFileAlt, FaCog } from 'react-icons/fa';
import Vector from "../assets/Vector.png";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Students", icon: <FaUserGraduate /> },
    { name: "Help", icon: <FaQuestionCircle /> },
    { name: "Reports", icon: <FaFileAlt /> },
    { name: "Setting", icon: <FaCog /> },
  ];

  return (
    <div className="w-64 h-screen bg-white text-black fixed">
      <div className="flex items-center justify-center h-16">
        <h1 className="text-xl font-bold flex justify-start">
          <img
            src={Vector}
            className="w-25 h-10"  // Adjusted for better scaling of logo
            alt="Logo"
          />
        </h1>
      </div>
      <ul className="mt-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-200 ${
              activeSection === item.name
                ? "bg-gray-300 text-black"  // Highlight active section with gray background
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection(item.name)}
            aria-current={activeSection === item.name ? "page" : undefined}
          >
            <span className="mr-3 text-xl">{item.icon}</span> {/* Increased icon size */}
            <span className="text-lg font-semibold">{item.name}</span> {/* Increased text size */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
