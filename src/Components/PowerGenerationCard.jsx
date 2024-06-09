import React, { useState } from "react";
import PowerGeneration from "../Logos/PowerGeneration.svg";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PowerGenerationPopup from "../Popups/PowerGenerationPopup";

export function PowerGenerationCard() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Card className="mt-6 mx-4 hover:shadow-2xl cursor-pointer" onClick={handleCardClick}>
        <CardBody>
          <img
            className="rounded-2xl py-3"
            style={{ height: "100px", width: "100px" }}
            src={PowerGeneration}
            alt="Description of the image"
          />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Power Genration
          </Typography>
          <Typography>
            <span>Today's power generation </span>
            <span className="text-xl text-black">200Kwh</span>
          </Typography>
        </CardBody>
      </Card>
      <PowerGenerationPopup
        show={showPopup}
        onClose={handleClosePopup}
        content={
          <Typography variant="h6" color="blue-gray">
            Power Generation Details
          </Typography>
        }
      />
    </>
  );
}
