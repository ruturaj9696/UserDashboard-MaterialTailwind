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
export function PowerGenerationGraph({
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
        <img src={PowerGeneration} alt="sj" className="mb-3" />
        <div className="mb-3">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Power Generation Analytics
          </Typography>
        </div>
        <div>
          <PowerGenerationBar />
        </div>
        <Typography>{date}</Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href={link} className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            {linkText}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
