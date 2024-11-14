import React from "react";

export function PlantInformationPopup({ show, onClose, content }) {
  if (!show) return null;

  // Modified data with provided values
  const updatedData = {
    plantID: "pvp_ec6fb83",
    numberOfModules: "46",
    plantCapacity: "15.41 kW",
    email: "example@example.com", // keep as is, as email isn't provided
    siteLocation: "GVCH+FP Pune, Maharashtra",
    siteAddress: "The Ladies Club, 3, Colonel Tarapore Rd, Camp, Pune, Maharashtra 411001",
    siteContactNumber: "9527563840",
    msedclConsumerNumber: "170011755294",
    assignedPlan: "PV Protect Pro",
    plantCOD: "0001-01-01T00:00:00.000Z",
    msedclRegisteredMobileNumber: "NA", // keep as is, as no value is provided
    numberOfStrings: "3",
    moduleMake: "Australian Premium Solar",
    moduleType: "NA", // keep as is, as no value is provided
    inverterMake: "Fronius",
    inverterModelName: "Fronius symo15.0-3-m",
    inverterSerialNumber: "NA", // keep as is, as no value is provided
    inverterCapacity: "15 kW",
    modeOfInternetConnection: "Wi-Fi", // keep as is, as no value is provided
    sld: "SLD123", // keep as is, as no value is provided
    plantLayout: "LayoutABC", // keep as is, as no value is provided
    netMeteringFile: "FileXYZ", // keep as is, as no value is provided
    moduleDatasheet: "Sheet1", // keep as is, as no value is provided
    inverterDatasheet: "Sheet2", // keep as is, as no value is provided
  };

  // Merge updated data with provided content (if any)
  const mergedContent = { ...updatedData, ...content };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-7xl w-full h-auto relative overflow-auto m-4 landscape-popup">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          X
        </button>
        <div className="w-full h-full">
          <h2 className="text-lg font-bold mb-4 text-center">Plant Information</h2>
          <div className="grid grid-cols-2 gap-4 m-12 border-t border-gray-200">
            <div className="border-r border-b border-gray-200 p-2">
              <strong>Plant ID:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.plantID}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Number Of Modules:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.numberOfModules}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Plant Capacity:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.plantCapacity}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Email:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.email}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Site Location:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.siteLocation}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Site Address:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.siteAddress}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Site Contact Number:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.siteContactNumber}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>MSEBCL Consumer Number:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.msedclConsumerNumber}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Assigned Plan:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.assignedPlan}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Plant COD:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.plantCOD}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>MSEBCL Registered Mobile Number:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.msedclRegisteredMobileNumber}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Number Of Strings:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.numberOfStrings}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Module Make:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.moduleMake}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Module Type:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.moduleType}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Inverter Make:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.inverterMake}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Inverter Model Name:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.inverterModelName}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Inverter Serial Number:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.inverterSerialNumber}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Inverter Capacity:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.inverterCapacity}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Mode Of Internet Connection:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.modeOfInternetConnection}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>SLD:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.sld}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Plant Layout:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.plantLayout}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Net Metering File:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.netMeteringFile}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Module Datasheet:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.moduleDatasheet}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Inverter Datasheet:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.inverterDatasheet}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
