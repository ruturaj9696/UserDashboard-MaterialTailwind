import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Finance from "../Logos/Finance.png";

export function FinancialAnalysis() {
  return (
    <Card className="mt-6 mx-4 hover:shadow-2xl">
      <CardBody>
        <img
          className="rounded-2xl py-3"
          style={{ height: "100px", width: "100px" }}
          src={Finance}
          alt="Description of the image"
        />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Finalcial Analysis
        </Typography>
        <Typography>
          This Tab contains All Financial Analysis
        </Typography>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}
