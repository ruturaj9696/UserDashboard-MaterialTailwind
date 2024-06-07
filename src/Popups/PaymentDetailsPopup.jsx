import React from "react";
import PaymentDetailsTable from "../Charts/PaymentDetailsTable";

export default function PaymentDetailsPopup({ show, onClose, content }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white grid p-8  rounded-lg max-w-7xl w-full h-auto relative overflow-auto m-4 landscape-popup">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          X
        </button>
        <div className="flex justify-center items-center flex-col w-full h-full">
          {content}
          <div className="mt-8 w-full">
            <PaymentDetailsTable />
          </div>
        </div>
      </div>
    </div>
  );
}
