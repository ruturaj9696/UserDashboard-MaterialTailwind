import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Irradiation from "../Logos/Irradiation.svg";
import { IrradiationPopup } from "../Popups/IrradiationPopup"; // Assuming the path is correct

export function IrradiationCard() {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleCardClick = () => {
    setPopupOpen(true);
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
            src={Irradiation}
            alt="Description of the image"
          />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Irradiation
          </Typography>
          <Typography>
            <div>This Month's Irradiation</div>
            <div className="text-black text-xl">20 kwh/m^2</div>
          </Typography>
        </CardBody>
      </Card>
      <IrradiationPopup
        show={popupOpen}
        onClose={() => setPopupOpen(false)}
        content={
          <Typography variant="h6" color="blue-gray" >
            Irradiation Details
          </Typography>
        }
      />
    </>
  );
}
