import React from "react";

const ReportsTable = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Post Commissioning Report */}
      <div className="m-1 p-3 bg-gray-800 text-white rounded-lg flex justify-between">
        <div>Post Commissioning Report</div>
        <div className="flex justify-between gap-2">
          <div className="cursor-pointer rounded-sm underline">Download</div>
          <div className="cursor-pointer rounded-sm underline">Preview</div>
        </div>
      </div>

      {/* Monthly Reports (Jan to Dec) */}
      {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
        <div key={index} className="m-1 p-3 bg-gray-800 text-white rounded-lg flex justify-between">
          <div>{`Monthly Report - ${month}`}</div>
          <div className="flex justify-between gap-2">
            <div className="cursor-pointer rounded-sm underline">Download</div>
            <div className="cursor-pointer rounded-sm underline">Preview</div>
          </div>
        </div>
      ))}

      {/* Testing Report */}
      <div className="m-1 p-3 bg-gray-800 text-white rounded-lg flex justify-between">
        <div>Testing Report</div>
        <div className="flex justify-between gap-2">
          <div className="cursor-pointer rounded-sm underline">Download</div>
          <div className="cursor-pointer rounded-sm underline">Preview</div>
        </div>
      </div>

      {/* Expert Visits */}
      {["Expert Visit 1", "Expert Visit 2"].map((visit, index) => (
        <div key={index} className="m-1 p-3 bg-gray-800 text-white rounded-lg flex justify-between">
          <div>{visit}</div>
          <div className="flex justify-between gap-2">
            <div className="cursor-pointer rounded-sm underline">Download</div>
            <div className="cursor-pointer rounded-sm underline">Preview</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportsTable;
