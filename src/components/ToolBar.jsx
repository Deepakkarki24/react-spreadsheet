import React from "react";

import {
  ChevronsRight,
  EyeOff,
  Filter,
  LayoutGrid,
  ArrowUpDown,
  Upload,
  Download,
  Share2,
  Plus,
} from "lucide-react";

const ToolBar = () => {
  const toolbarLeft = [
    { tool: "Tool bar", icon: ChevronsRight },
    { tool: "Hide fields", icon: EyeOff },
    { tool: "Sort", icon: ArrowUpDown },
    { tool: "Filter", icon: Filter },
    { tool: "Cell view", icon: LayoutGrid },
  ];

  const toolbarRight = [
    { tool: "Import", icon: Download },
    { tool: "Export", icon: Upload },
    { tool: "Share", icon: Share2 },
    { tool: "New Action", icon: Plus },
  ];
  return (
    <div className="flex justify-between items-center border-b border-gray-200 px-4 py-2">
      <div className="flex gap-2">
        {toolbarLeft.map((item, id) => {
          const Icon = item.icon;
          return (
            <button
              key={id}
              onClick={() => console.log(`${item.tool} clicked`)}
              className="px-3 py-2 bg-white rounded hover:bg-gray-200"
            >
              {item.tool === "Tool Bar" ? (
                <span className="flex items-center gap-1">
                  {item.tool}
                  <Icon className="w-4 h-4 text-gray-400" />
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Icon className="w-4 h-4 text-gray-400" />
                  {item.tool}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="flex gap-2">
        {toolbarRight.map((item, id) => {
          const Icon = item.icon;
          return (
            <button
              key={id}
              onClick={() => console.log(`${item.tool} clicked`)}
              className={`px-4 py-2 ${
                item.tool === "New Action"
                  ? "bg-green-800 text-white hover:bg-green-700"
                  : "bg-white hover:bg-gray-200"
              } border border-gray-200 rounded-[6px]`}
            >
              <span className="flex items-center gap-1">
                <Icon className="w-4 h-4 text-gray-400" />
                {item.tool}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ToolBar;
