import React, { useState } from "react";
import EpiLogo from "../Logos/GroupEpi.svg"
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PowerGeneration from "../Logos/PowerGeneration.png";
import { EpiPopup } from "../Popups/EpiPopup"; // Adjust the import path as needed

export function EpiCard() {
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
          <img
            className="rounded-2xl py-3"
            style={{ height: "100px", width: "100px" }}
            // src={PowerGeneration}
            src={EpiLogo}
            alt="Power Generation"
          />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            EPI
          </Typography>
          <Typography>
            This Month's Epi
            <div className="text-black text-xl">93%</div>
          </Typography>
        </CardBody>
      </Card>
      <EpiPopup show={showPopup} onClose={handleClosePopup}>
        <div className="text-center">
          <Typography variant="h4" className="mt-6">
            Epi Details
          </Typography>
        </div>
      </EpiPopup>
    </>
  );
}
