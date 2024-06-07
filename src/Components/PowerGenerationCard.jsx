import React from "react";
import PowerGeneration from "../Logos/PowerGeneration.svg";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function PowerGenerationCard() {
  return (
    <Card className="mt-6 mx-4 hover:shadow-2xl">
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
          <span>Today's Power Generation </span>
          <span className="text-xl text-black">200Kwh</span>
        </Typography>
      </CardBody>
    </Card>
  );
}
