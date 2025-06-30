import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Experience({ logo, title, position, date, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="group">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <img src={logo} alt={title} className="w-8 h-8 object-contain" />
          <div>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-semibold">{title}</h3>
              <FaChevronRight
                className={`text-gray-400 transition-transform duration-300 ${
                  isOpen
                    ? "rotate-90 opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
                size={10}
              />
            </div>
            <p className="text-xs mb-1 text-gray-600">{position}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">{date}</p>
      </div>

      

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden ml-12 text-xs text-gray-700"
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default Experience;
