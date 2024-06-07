import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import FinancialAnalysis from "../Logos/FinancialAnalysis.svg"
export default function PaymentDetailsCard({
  title,
  description,
  link,
  linkText,
  date,
  graph,
}) {
  return (
    <Card className="mt-6 mx-4 hover:shadow-2xl">
      <CardBody>
        <img
          className="rounded-2xl py-3"
          style={{ height: "100px", width: "100px" }}
          src={FinancialAnalysis}
          alt="Description of the image"
        />
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Payment Details
        </Typography>
        <Typography>This card contains all the details about the payment</Typography>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}
