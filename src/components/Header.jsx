// components/Header.jsx
import React from "react";
import {
  ChevronLeft,
  Folder,
  Search,
  Bell,
  HelpCircle,
  User,
} from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm">
          <Folder className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600">Workspace</span>
          <ChevronLeft className="w-3 h-3 text-gray-400 rotate-180" />
          <span className="text-gray-600">Folder 2</span>
          <ChevronLeft className="w-3 h-3 text-gray-400 rotate-180" />
          <span className="font-medium text-gray-800">Spreadsheet 3</span>
          <button className="text-gray-400 hover:text-gray-600">
            <span className="text-lg">···</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-9 pr-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">
          <button className="text-gray-600 hover:text-gray-800">
            <Bell className="w-5 h-5" />
            <span className="bg-red-500 text-white text-xs rounded-full w-2 h-2 absolute -mt-6 ml-3"></span>
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">John Doe</span>
              <span className="text-xs text-gray-500">john.doe</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
