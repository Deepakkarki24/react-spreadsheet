import React from "react";
import data from "./data";
import ToolBar from "./components/ToolBar";
import SpreadsheetTable from "./components/SpreadsheetTable";
import Header from "./components/Header";

const statusColor = {
  In_process: "bg-yellow-100 text-yellow-800",
  Need_to_start: "bg-blue-100 text-blue-800",
  Complete: "bg-green-100 text-green-800",
  Blocked: "bg-red-100 text-red-800",
};

const priorityColor = {
  High: "text-red-600",
  Medium: "text-orange-500",
  Low: "text-blue-600",
};

const App = () => {
  return (
    <div className="min-h-screen bg-white text-sm font-sans">
      {/* Top Header */}
      <Header />
      {/* Top Toolbar */}
      <ToolBar />
    </div>
  );
};

export default App;
