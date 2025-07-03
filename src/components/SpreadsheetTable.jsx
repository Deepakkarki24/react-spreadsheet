import React from "react";
import data from "../data.js";

const header = [
  "#",
  "Job Request",
  "Submitted",
  "Status",
  "Submitter",
  "URL",
  "Assigned",
  "Priority",
  "Due Date",
  "Est. Value",
];

const headerTabColor = {
  Assigned: "bg-green-100",
  Priority: "bg-purple-200",
  "Due Date": "bg-purple-200",
  "Est. Value": "bg-orange-100",
};

const SpreadsheetTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr className="bg-gray-100 text-gray-500 text-[13px]">
            {header.map((head, index) => (
              <th
                key={index}
                className={`px-3 py-2 border border-gray-200 ${
                  headerTabColor[head] || ""
                }`}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">{id}</td>
              <td className="border border-gray-300 px-3 py-2">{item.job}</td>
              <td className="border border-gray-300 px-3 py-2">
                {item.submitted}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {item.status}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {item.submitter}
              </td>
              <td className="border border-gray-300 px-3 py-2">{item.url}</td>
              <td className="border border-gray-300 px-3 py-2">
                {item.assigned}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {item.priority}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {item.dueDate}
              </td>
              <td className="border border-gray-300 px-3 py-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetTable;
