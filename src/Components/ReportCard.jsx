import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Report from "../Logos/Reports.svg";
import ReportsPopup from "../Popups/ReportsPopup";

export function ReportCard() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Card
        className="mt-6 mx-4 hover:shadow-2xl cursor-pointer"
        onClick={handleCardClick}
      >
        <CardBody>
          <img src={Report} alt="Reports" className="h-24" />
          <Typography variant="h5" color="blue-gray" className="mb-2 mt-5">
            Reports
          </Typography>
          <Typography>This tab contains all kinds of reports.</Typography>
        </CardBody>
      </Card>

      <ReportsPopup
        show={showPopup}
        onClose={handleClosePopup}
        content={
          <Typography variant="h6" color="blue-gray">
            Report Details
          </Typography>
        }
      />
    </>
  );
}
