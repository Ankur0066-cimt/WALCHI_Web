import React, { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaUser,
  FaMapMarkerAlt,
  // FaBriefcase,
} from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa6";
import walchilogo from "../assets/Walchi.png";
import { useNavigate } from "react-router-dom";
// import { PiCarProfile } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { label: "Colours", dropdown: ["Interior", "Exterior", "Textures"] },
    { label: "Catalogue", dropdown: ["InstaPaint", "Wallpaper", "Muler"] },
    { label: "Services", dropdown: ["Consultation", "Site Visit"] },
    { label: "Calculators", dropdown: ["Paint Calculator", "Cost Estimator"] },
    { label: "Sustainability", dropdown: ["Eco Paints", "Green Practices"] },
    { label: "More...", dropdown: ["Blog", "Inspiration", "Tips"] },
  ];

  const rightMenu = ["Our Company", "Investors", "Careers", "Contact us"];

  const navigate = useNavigate();

  return (
    <nav className=" w-full bg-white shadow-sm">
      <div className="max-w-full mx-auto mr-8 ml-2 flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <img
            src={walchilogo}
            alt="Wallchi Logo"
            className="w-40 h-20 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
          {/* <span className="text-xl font-bold text-[#d9392b]">Wallchi</span> */}
        </div>

        <div className="flex items-center border border-black rounded-full px-4 w-96 bg-white">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for Colour inspiration"
            className="w-full py-2 text-base outline-none placeholder-gray-500"
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="relative flex items-center group">
            <FaRegBuilding className="text-gray-700 text-lg cursor-pointer hover:text-green-500 transition-all duration-300" />

            <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Budget Calculator
            </span>
          </div>
          <FaMapMarkerAlt className="text-gray-700 text-lg cursor-pointer hover:text-green-500 transition-all duration-300" />
          <FiSettings
            className="text-gray-700 text-lg cursor-pointer hover:text-green-500 transition-all duration-300"
            onClick={() => navigate("/login")}
          />
          
          <FaUser className="text-gray-700 text-lg cursor-pointer hover:text-green-500 transition-all duration-300"
          onClick={() => navigate("/myprofile")}
          />

          <button
            className="bg-[#FBBF24] hover:bg-yellow-500 px-5 py-2 rounded-full font-semibold text-white"
            onClick={() => navigate("/consultation")}
          >
            Book Free Site Visit
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-10xl mx-auto flex items-center px-6 h-12 gap-8 text-sm font-medium text-gray-800">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#006E39]">
            <FaHome />
            Home
          </div>

          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className="hover:text-[#006E39]">{item.label}</span>

              {activeMenu === item.label && (
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48">
                  {item.dropdown.map((subItem) => (
                    <li
                      key={subItem}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#006E39] cursor-pointer"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="ml-auto flex gap-6 text-gray-600">
            {rightMenu.map((link) => (
              <span key={link} className="cursor-pointer hover:text-[#006E39]">
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
