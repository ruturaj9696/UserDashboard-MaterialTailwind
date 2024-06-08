import React, { useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import CleaningCycleChart from "../Charts/CleaningCycleChart";
import CleaningCycle from "../Logos/CleaningCycle.svg";
import { CleaningCyclePopup } from "../Popups/CleaningCyclePopup";


export function CleaningCycleCard() {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleCardClick = () => {
    setPopupOpen(true);
  };
  return (
    <>
      <Card
        className="mt-6 mx-4 hover:shadow-2xl bg-red- grid grid-cols-2 cursor-pointer"
        onClick={handleCardClick}
      >
        <CardBody>
          <img
            className="rounded-2xl py-3 pt-0"
            style={{ height: "100px", width: "100px" }}
            src={CleaningCycle}
            alt="Description of the image"
          />
          <Typography variant="h5" color="blue-gray" className="mb-2 flex">
            <div>
              <div>Cleaning Cycle</div>
              <div className="mt-3"></div>
            </div>
          </Typography>
          <Typography>
            <div>
              Number of cleaning Cycles completed / Total number of cleaning
              cycles
            </div>
          </Typography>
        </CardBody>
        <div className=" flex items-center justify-center ">
          <CleaningCycleChart />
        </div>
      </Card>

      <CleaningCyclePopup
        show={popupOpen}
        onClose={() => setPopupOpen(false)}
        content={
          <Typography variant="h6" color="blue-gray">
            Cleaning Cycle Details
          </Typography>
        }
      />
    </>
  );
}
