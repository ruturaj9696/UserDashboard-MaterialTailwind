import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PlantInformation from "../Logos/PlantInformation.png";
export function PlantInformationCard() {
  return (
    <Card className="mt-6 mx-4 hover:shadow-2xl">
      <CardBody>
        <img
          className="rounded-2xl py-3"
          style={{ height: "100px", width: "100px" }}
          src={PlantInformation}
          alt="Description of the image"
        />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Plant Information
        </Typography>
        <Typography>This Tab contains Your Plant Information</Typography>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}
