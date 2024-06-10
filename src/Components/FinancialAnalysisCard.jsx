import React,{useState} from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import FinancialAnalysisLogo from "../Logos/FinancialAnalysis.svg";
import { FinancialAnalysisPopup } from "../Popups/FinancialAnalysisPopup";

export function FinancialAnalysis() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Card className="mt-6 mx-4 hover:shadow-2xl" onClick={handleCardClick}>
        <CardBody>
          <img
            className="rounded-2xl py-3"
            style={{ height: "100px", width: "100px" }}
            src={FinancialAnalysisLogo}
            alt="Description of the image"
          />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Finalcial Analysis
          </Typography>
          <Typography>This tab contains all financial analysis</Typography>
        </CardBody>
        <CardFooter className="pt-0"></CardFooter>
      </Card>
      <FinancialAnalysisPopup
        show={showPopup}
        onClose={handleClosePopup}
        content={
          <Typography variant="h6" color="blue-gray">
            Payment Tracking Details
          </Typography>
        }
      ></FinancialAnalysisPopup>
    </>
  );
}
