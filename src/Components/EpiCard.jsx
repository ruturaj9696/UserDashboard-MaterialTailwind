import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PowerGeneration from "../Logos/PowerGeneration.png";

export function EpiCard() {
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
          EPI
        </Typography>
        <Typography>
          This Month's Epi
          <div className="text-black text-xl">93%</div>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}
