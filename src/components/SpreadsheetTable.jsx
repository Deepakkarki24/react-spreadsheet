import React, { act, useState } from "react";
import data from "../data.js";
import RowHeader from "./RowHeader.jsx";

import {
  BriefcaseBusiness,
  CalendarDays,
  CircleArrowDown,
  UserRound,
  Globe,
  SmilePlus,
  ChevronDown,
} from "lucide-react";

const header = [
  { name: "Job Request", icon: BriefcaseBusiness },
  { name: "Submitted", icon: CalendarDays },
  { name: "Status", icon: CircleArrowDown },
  { name: "Submitter", icon: UserRound },
  { name: "URL", icon: Globe },
  { name: "Assigned", icon: SmilePlus },
  { name: "Priority" },
  { name: "Due Date" },
  { name: "Est. Value" },
];

const priorityColor = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-blue-600",
};

const statusColor = {
  "In-process": "text-yellow-600 bg-yellow-100",
  "Need to start": "text-gray-600 bg-gray-200",
  Complete: "text-green-600 bg-green-100",
  Blocked: "text-red-600 bg-red-100",
};

const headerTabColor = {
  Assigned: "bg-green-100",
  Priority: "bg-purple-200",
  "Due Date": "bg-purple-200",
  "Est. Value": "bg-orange-100",
};

const columnWidths = {
  "Job Request": "w-60",
  Submitted: "w-32",
  Status: "w-28",
  Submitter: "w-32",
  URL: "w-32",
  Assigned: "w-40",
  Priority: "w-28",
  "Due Date": "w-32",
  "Est. Value": "w-32",
};

let totalRow = 25;
let totalCol = 26;

const SpreadsheetTable = () => {
  let filledRow = data.length;
  let emptyRow = totalRow - filledRow;
  let emptyCol = totalCol - header.length;

  let [activeCell, setActiveCell] = useState({ row: null, col: null });
  let [editable, setEditable] = useState({ row: null, col: null });

  const handleOnBlur = () => {
    setEditable({ row: null, col: null });
  };

  return (
    <div
      className="overflow-auto max-w-full"
      style={{ cursor: 'url("/cursor/cursor.cur") 8 8, auto' }}
    >
      <table className="min-w-max table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-500 text-[13px]">
            <th className={"px-3 py-2 border border-gray-200"}>#</th>
            {header.map((head, index) => {
              const Icon = head.icon;

              return (
                <td
                  key={index}
                  className={`px-3 font-bold text-xs py-2 border border-gray-200 ${
                    headerTabColor[head] || ""
                  }
                  ${columnWidths[head.name] || "w-32"}
                  `}
                >
                  <span className={"flex items-center justify-between"}>
                    {Icon ? (
                      <span className="flex items-center gap-1">
                        <Icon className="w-4 h-4 text-gray-400" /> {head.name}
                      </span>
                    ) : (
                      <span>{head.name}</span>
                    )}
                    {Icon ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      ""
                    )}
                  </span>
                </td>
              );
            })}

            {/* Empty Headers */}

            {Array.from({ length: emptyCol }).map((_, i) => (
              <th
                key={i}
                className={"border border-gray-200 px-3 py-2 w-32"}
              ></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <RowHeader rowNumber={index} />
              <td
                onClick={() => setActiveCell({ row: index, col: item.job })}
                onDoubleClick={() => setEditable({ row: index, col: item.job })}
                className={`w-40 hover:bg-gray-50 text-sm  px-2 truncate overflow-hidden whitespace-nowrap max-w-[120px]
                  
                  ${
                    activeCell.row === index && activeCell.col === item.job
                      ? "border-blue-600 border-2"
                      : "border border-gray-300"
                  }
                  
                  `}
              >
                {editable.row === index && editable.col === item.job ? (
                  <input
                    onBlur={handleOnBlur}
                    className="outline-none h-full w-full py-1 px-2"
                  />
                ) : (
                  item.job
                )}
              </td>
              <td
                onClick={() =>
                  setActiveCell({ row: index, col: item.submitted })
                }
                onDoubleClick={() =>
                  setEditable({ row: index, col: item.submitted })
                }
                className={`w-32 hover:bg-gray-50 text-sm text-right px-2 truncate overflow-hidden whitespace-nowrap max-w-[120px]
                  
                  ${
                    activeCell.row === index &&
                    activeCell.col === item.submitted
                      ? "border-blue-600 border-2"
                      : "border border-gray-300"
                  }
                  `}
              >
                {editable.row === index && editable.col === item.submitted ? (
                  <input
                    onBlur={handleOnBlur}
                    className="outline-none h-full w-full py-1 px-2"
                  />
                ) : (
                  item.submitted
                )}
              </td>
              <td
                onClick={() => setActiveCell({ row: index, col: item.status })}
                onDoubleClick={() =>
                  setEditable({ row: index, col: item.status })
                }
                className={`w-28 hover:bg-gray-50 text-xs text-center px-2 truncate overflow-hidden whitespace-nowrap max-w-[120px]
                  ${
                    activeCell.row === index && activeCell.col === item.status
                      ? "border-blue-600 border-2"
                      : "border border-gray-300"
                  }
                  
                  `}
              >
                <span
                  className={`py-1 px-2 rounded-full font-semibold ${
                    statusColor[item.status] || ""
                  }`}
                >
                  {editable.row === index && editable.col === item.status ? (
                    <input
                      onBlur={handleOnBlur}
                      className="outline-none h-full w-full py-1 px-2"
                    />
                  ) : (
                    item.status
                  )}
                </span>
              </td>
              <td
                onClick={() =>
                  setActiveCell({ row: index, col: item.submitter })
                }
                onDoubleClick={() =>
                  setEditable({ row: index, col: item.submitter })
                }
                className={`w-32 hover:bg-gray-50 text-sm  px-2 truncate overflow-hidden whitespace-nowrap max-w-[120px]
                  ${
                    activeCell.row === index &&
                    activeCell.col === item.submitter
                      ? "border-blue-600 border-2"
                      : "border border-gray-300"
                  }
                  
                  `}
              >
                {editable.row === index && editable.col === item.submitter ? (
                  <input
                    onBlur={handleOnBlur}
                    className="outline-none h-full w-full py-1 px-2"
                  />
                ) : (
                  item.submitter
                )}
              </td>
              <td
                onClick={() => setActiveCell({ row: index, col: item.url })}
                onDoubleClick={() => setEditable({ row: index, col: item.url })}
                className={`w-48 hover:bg-gray-50 text-sm underline px-2 truncate overflow-hidden whitespace-nowrap max-w-[120px]
                  ${
                    activeCell.row === index && activeCell.col === item.url
                      ? "border-blue-600 border-2"
                      : "border border-gray-300"
                  }
                  `}
              >
                {editable.row === index && editable.col === item.url ? (
                  <input
                    onBlur={handleOnBlur}
                    className="outline-none h-full w-full py-1 px-2"
                  />
                ) : (
                  item.url
                )}
              </td>
              <td
                onClick={() =>
                  setActiveCell({ row: index, col: item.assigned })
                }
                onDoubleClick={() =>
                  setEditable({ row: index, col: item.assigned })
                }
                className={`w-32 hover:bg-gray-50 text-sm px-2 truncate overflow-hidden whitespace-nowrap max-w-[120px]
                  
                  ${
                    activeCell.row === index && activeCell.col === item.assigned
                      ? "border-blue-600 border-2"
                      : "border border-gray-300"
                  }
                  `}
              >
                {editable.row === index && editable.col === item.assigned ? (
                  <input
                    onBlur={handleOnBlur}
                    className="outline-none h-full w-full py-1 px-2"
                  />
                ) : (
                  item.assigned
                )}
              </td>
              <td
                onClick={() =>
                  setActiveCell({ row: index, col: item.priority })
                }
                onDoubleClick={() =>
                  setEditable({ row: index, col: item.priority })
                }
                className={`w-28 hover:bg-gray-50 text-center px-2 truncate overflow-hidden whitespace-nowrap max-w-[120px]
                   ${
                     activeCell.row === index &&
                     activeCell.col === item.priority
                       ? "border-blue-600 border-2"
                       : "border border-gray-300"
                   }

                  `}
              >
                <span
                  className={`font-semibold ${
                    priorityColor[item.priority] || ""
                  }`}
                >
                  {editable.row === index && editable.col === item.priority ? (
                    <input
                      onBlur={handleOnBlur}
                      className="outline-none h-full w-full py-1 px-2"
                    />
                  ) : (
                    item.priority
                  )}
                </span>
              </td>
              <td
                onClick={() => setActiveCell({ row: index, col: item.dueDate })}
                onDoubleClick={() =>
                  setEditable({ row: index, col: item.dueDate })
                }
                className={`w-32 hover:bg-gray-50 text-sm text-righ px-2 truncate overflow-hidden whitespace-nowrap max-w-[120px]
                  ${
                    activeCell.row === index && activeCell.col === item.dueDate
                      ? "border-blue-600 border-2"
                      : "border border-gray-300"
                  }

                  `}
              >
                {editable.row === index && editable.col === item.dueDate ? (
                  <input
                    onBlur={handleOnBlur}
                    className="outline-none h-full w-full py-1 px-2"
                  />
                ) : (
                  item.dueDate
                )}
              </td>
              <td
                onClick={() => setActiveCell({ row: index, col: item.value })}
                onDoubleClick={() =>
                  setEditable({ row: index, col: item.value })
                }
                className={`w-32 hover:bg-gray-50 text-sm text-right px-2 truncate overflow-hidden whitespace-nowrap max-w-[120px]
                  
                  ${
                    activeCell.row === index && activeCell.col === item.value
                      ? "border-blue-600 border-2"
                      : "border border-gray-300"
                  }
                  `}
              >
                {editable.row === index && editable.col === item.value ? (
                  <input
                    onBlur={handleOnBlur}
                    className="outline-none h-full w-full py-1 px-2"
                  />
                ) : (
                  item.value
                )}
              </td>
              {Array.from({ length: emptyCol }).map((_, colIndex) => (
                <td
                  onClick={() => setActiveCell({ row: index, col: colIndex })}
                  onDoubleClick={() =>
                    setEditable({ row: index, col: colIndex })
                  }
                  key={colIndex}
                  className={`px-2 ${columnWidths || "w-32"}
                  
                  ${
                    activeCell.row === index && activeCell.col === colIndex
                      ? "border-2 border-blue-600"
                      : "border border-gray-200 "
                  }
                  `}
                >
                  {editable.row === index && editable.col === colIndex ? (
                    <input
                      onBlur={handleOnBlur}
                      className="py-1 px-2 outline-none w-full"
                    />
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          ))}

          {Array.from({ length: emptyRow }).map((_, rowIndex) => (
            <tr key={rowIndex + filledRow}>
              <RowHeader rowNumber={rowIndex + filledRow} />
              {Array.from({ length: totalCol }).map((_, colIndex) => (
                <td
                  onClick={() =>
                    setActiveCell({
                      row: "bottom" + rowIndex,
                      col: "bottom" + colIndex,
                    })
                  }
                  onDoubleClick={() =>
                    setEditable({
                      row: "bottom" + rowIndex,
                      col: "bottom" + colIndex,
                    })
                  }
                  key={colIndex}
                  className={`hover:bg-gray-50 px-2 ${columnWidths || "w-32"}
                  ${
                    activeCell.row === "bottom" + rowIndex &&
                    activeCell.col === "bottom" + colIndex
                      ? "border-blue-600 border-2"
                      : "border-gray-200 border"
                  }
                  
                  `}
                >
                  {editable.row === "bottom" + rowIndex &&
                  editable.col === "bottom" + colIndex ? (
                    <input className="w-full outline-none py-1 px-2" />
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetTable;
