import React, { useState } from "react";
import { Plus } from "lucide-react";

let footerTabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const Footer = () => {
  let [activeTab, setActiveTab] = useState(0);
  let [tabs, setTabs] = useState(footerTabs);
  let [editTab, setEditTab] = useState(null);
  return (
    <div className="bg-white sticky left-0 bottom-0 z-10 px-10 flex w-full">
      {tabs.map((tab, idx) => (
        <span
          onClick={() => setActiveTab(idx)}
          onDoubleClick={() => setEditTab(idx)}
          key={idx}
          className={`p-3 px-6 w-auto cursor-pointer font-semibold text-gray-700
        ${
          activeTab === idx
            ? "border-t-2 border-t-green-800 bg-green-100"
            : "bg-white"
        }
        
        `}
        >
          {editTab === idx ? (
            <input
              onBlur={() => setEditTab(null)}
              className="outline-none p-0 w-full"
            />
          ) : (
            tab
          )}
        </span>
      ))}
      <span
        onClick={() => setTabs((prev) => [...prev, ""])}
        className="p-3 px-6 cursor-pointer font-semibold text-gray-700"
      >
        <Plus className="text-gray-700 w-5" />
      </span>
    </div>
  );
};

export default Footer;
