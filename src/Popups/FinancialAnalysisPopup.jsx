import React from "react";
import EpiBarChart from "../Charts/EpiBarChart";

export function FinancialAnalysisPopup({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white grid p-8 rounded-lg max-w-7xl w-full h-auto relative overflow-auto m-4 landscape-popup">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          X
        </button>
        <div className="flex justify-center items-center flex-col w-full h-full">
          <h2 className="text-lg font-bold mb-8">Financial Analysis</h2>
          <div className="w-full">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200">Details</th>
                  <th className="py-2 px-4 bg-gray-200">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border">User Name</td>
                  <td className="py-2 px-4 border">Mr Ruturaj Deshmukh</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Initial investment</td>
                  <td className="py-2 px-4 border">2500000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Maintenance cost</td>
                  <td className="py-2 px-4 border">15000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">
                    Total unit generation till date
                  </td>
                  <td className="py-2 px-4 border">3434</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Total revenue earned</td>
                  <td className="py-2 px-4 border">34232</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Pay back period</td>
                  <td className="py-2 px-4 border">4.2 years</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">IRR</td>
                  <td className="py-2 px-4 border">25%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">NPV</td>
                  <td className="py-2 px-4 border">22.5 lakh</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 w-full"></div>
        </div>
      </div>
    </div>
  );
}
