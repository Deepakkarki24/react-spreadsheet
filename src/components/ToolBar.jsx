import React from "react";
import { TfiImport } from "react-icons/tfi";
import { CiExport } from "react-icons/ci";
import { FaRegShareSquare } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

import { FaAnglesRight } from "react-icons/fa6";
import { BiHide } from "react-icons/bi";
import { MdImportExport } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { TbRotateRectangle } from "react-icons/tb";

const ToolBar = () => {
  const toolbarLeft = [
    { tool: "Tool bar", icon: FaAnglesRight },
    { tool: "Hide fields", icon: BiHide },
    { tool: "Sort", icon: MdImportExport },
    { tool: "Filter", icon: IoFilterOutline },
    { tool: "Cell view", icon: TbRotateRectangle },
  ];

  const toolbarRight = [
    { tool: "Import", icon: TfiImport },
    { tool: "Export", icon: CiExport },
    { tool: "Share", icon: FaRegShareSquare },
    { tool: "New Action", icon: GrTransaction },
  ];
  return (
    <div className="flex justify-between items-center mb-4 border border-gray-200 p-2">
      <div className="flex gap-2">
        {toolbarLeft.map((tool, id) => {
          const Icon = tool.icon;
          return (
            <button
              key={id}
              onClick={() => console.log(`${tool.tool} clicked`)}
              className="px-3 py-2 bg-white rounded hover:bg-gray-200"
            >
              {
                <span className="flex items-center gap-1">
                  <Icon />
                  {tool.tool}
                </span>
              }
            </button>
          );
        })}
      </div>
      <div className="flex gap-2">
        {toolbarRight.map((tool, id) => {
          const Icon = tool.icon;
          return (
            <button
              key={id}
              onClick={() => console.log(`${tool} clicked`)}
              className={`px-4 py-2 ${
                tool.tool === "New Action"
                  ? "bg-green-800 text-white hover:bg-green-700"
                  : "bg-white hover:bg-gray-200"
              } border border-gray-200 rounded-[6px]`}
            >
              <span className="flex items-center gap-1">
                <Icon />
                {tool.tool}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ToolBar;
