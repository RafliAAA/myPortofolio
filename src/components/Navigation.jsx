import {
  FaHome,
  FaGithub,
  FaSun,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Navigation() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50 items-center bg-white border border-gray-300 shadow-xl px-4 py-2 rounded-full  ">
      <a
        href="/"
        className="p-2 rounded-full hover:bg-gray-100 text-black transition duration-300 transform hover:scale-110"
      >
        <FaHome size={20} />
      </a>
      <a
        href="https://github.com/RafliAAA"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-gray-100 text-black transition duration-300 transform hover:scale-110"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://linkedin.com/in/raflia"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-gray-100 text-black transition duration-300 transform hover:scale-110"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://instagram.com/raflieeea"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-gray-100 text-black transition duration-300 transform hover:scale-110"
      >
        <FaInstagram size={20} />
      </a>
    
    </div>
  );
}

export default Navigation;
