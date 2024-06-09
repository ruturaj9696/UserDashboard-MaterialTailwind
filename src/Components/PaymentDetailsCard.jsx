import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import paymentDetails from "../Logos/paymentDetails.svg"
import PaymentDetailsPopup from "../Popups/PaymentDetailsPopup";
export default function PaymentDetailsCard() {
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
            src={paymentDetails}
            alt="Description of the image"
          />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Payment Tracking
          </Typography>
          <Typography>
            This card contains all the details about the payment
          </Typography>
        </CardBody>
        <CardFooter className="pt-0"></CardFooter>
      </Card>
      <PaymentDetailsPopup
        show={showPopup}
        onClose={handleClosePopup}
        content={
          <Typography variant="h6" color="blue-gray">
            Payment Tracking Details
          </Typography>
        }
      >
      </PaymentDetailsPopup>
    </>
  );
}
