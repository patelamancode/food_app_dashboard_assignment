import React from "react";
import { Menu, Mail, Bell } from "lucide-react";
import { FaUserLarge } from "react-icons/fa6";

const Header = ({ toggleSidebar }) => {
  const token = false;
  return (
    <div>
      <header className="flex lg:justify-end justify-between items-center p-4 bg-gray-800">
        <button className="lg:hidden" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <div className="flex items-center space-x-6">
          <Mail size={20} />
          <Bell size={20} />
          {token ? (
            <img
              src="/api/placeholder/32/32"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <FaUserLarge />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
