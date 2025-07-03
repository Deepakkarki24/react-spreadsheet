import React, { useState } from "react";

const RowHeader = ({ rowNumber }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    console.log(`Row ${rowNumber} selected`);
  };
  return (
    <td
      className={`
        sticky left-0 z-10 w-8 h-8 
        bg-gray-50 border-r border-b border-gray-200 
        flex items-center justify-center cursor-pointer
        
        ${isSelected ? "bg-blue-100" : ""}
        ${isHovered ? "bg-gray-100" : ""}
      `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-xs text-gray-400 font-medium">{rowNumber + 1}</span>
    </td>
  );
};

export default RowHeader;
