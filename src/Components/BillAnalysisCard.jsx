import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import BillAnalysis from "../Logos/BillAnalysis.svg";
import BillAnalysisPopup from "../Popups/BillAnalysisPopup";

export function BillAnalysisCard() {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleCardClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <Card
        className="mt-6 mx-4 hover:shadow-2xl cursor-pointer"
        onClick={handleCardClick}
      >
        <CardBody>
          <img
            className="rounded-2xl py-3"
            style={{ height: "100px", width: "100px" }}
            src={BillAnalysis}
            alt="Description of the image"
          />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Bill Analysis
          </Typography>
          <Typography>20/02/2024 - 20/03/2024</Typography>
          <Typography className="text-black text-xl">$25 </Typography>
        </CardBody>
      </Card>

      <BillAnalysisPopup
        show={popupOpen}
        onClose={handleClosePopup}
        content={
          <Typography variant="h6" color="blue-gray">
            Bill Analysis
          </Typography>
        }
      />
    </>
  );
}
