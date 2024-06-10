import React from "react";

export function PlantInformationPopup({ show, onClose, content }) {
  if (!show) return null;

  // Dummy data for testing
  const dummyData = {
    plantCapacity: "25 kW",
    email: "example@example.com",
    siteLocation: "Pune",
    siteAddress: "123 Main Street, Pune",
    siteContactNumber: "1234567890",
    msedclConsumerNumber: "123456",
    assignedPlan: "Basic Plan",
    plantCOD: "01/01/2022",
    msedclRegisteredMobileNumber: "0987654321",
    numberOfModules: "100",
    moduleMake: "ModuleX",
    moduleType: "TypeA",
    numberOfStrings: "5",
    inverterMake: "InverterY",
    inverterModelName: "ModelZ",
    inverterSerialNumber: "Serial123",
    inverterCapacity: "50 kW",
    modeOfInternetConnection: "Wi-Fi",
    sld: "SLD123",
    plantLayout: "LayoutABC",
    netMeteringFile: "FileXYZ",
    moduleDatasheet: "Sheet1",
    inverterDatasheet: "Sheet2",
  };

  // Merge dummy data with provided content (if any)
  const mergedContent = { ...dummyData, ...content };

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
              <strong>MSEDCL Consumer Number:</strong>
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
              <strong>MSEDCL Registered Mobile Number:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.msedclRegisteredMobileNumber}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Number Of Modules:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.numberOfModules}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Module Make:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.moduleMake}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Module Type:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.moduleType}</div>

            <div className="border-r border-b border-gray-200 p-2">
              <strong>Number Of Strings:</strong>
            </div>
            <div className="border-b border-gray-200 p-2">{mergedContent.numberOfStrings}</div>

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
