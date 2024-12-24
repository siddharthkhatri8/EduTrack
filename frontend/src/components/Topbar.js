import { FaQuestionCircle, FaEnvelope, FaCog, FaBell } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-10">
      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search students..."
          className="p-2 border rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-backWhite"
        />
      </div>

      {/* Icons and User Info */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-blue-500">
          <FaQuestionCircle /> {/* Help Icon */}
        </button>
        <button className="text-gray-500 hover:text-blue-500">
          <FaEnvelope /> {/* Message Icon */}
        </button>
        <button className="text-gray-500 hover:text-blue-500">
          <FaCog /> {/* Setting Icon */}
        </button>
        <button className="text-gray-500 hover:text-blue-500">
          <FaBell /> {/* Notification Icon */}
        </button>
        <div className="flex items-center space-x-2">
          {/* User Image */}
          <img
            src="https://via.placeholder.com/32"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          {/* Username */}
          <span className="text-gray-700 font-medium">John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
