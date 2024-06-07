import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PowerGenerationBar from "../Charts/PowerGenerationBar";
import PowerGeneration from "../Logos/PowerGeneration.svg";
export function PowerGenerationGraph() {
  return (
    <Card className="mt-6 mx-4 hover:shadow-2xl">
      <CardBody>
        <img src={PowerGeneration} alt="PowerGeneration" className="mb-3" />
        <div className="mb-3">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Power Generation Analytics
          </Typography>
        </div>
        <div>
          <PowerGenerationBar />
        </div>
      </CardBody>
      
    </Card>
  );
}
