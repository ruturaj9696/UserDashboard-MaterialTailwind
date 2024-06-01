import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PoerGenerationBar from "../Charts/PoerGenerationBar";

export function PowerGenerationGraph({ title, description, link, linkText ,date,graph}) {
  return (
    <Card className="mt-6 mx-4 hover:shadow-2xl">
      <CardBody>
        <div className="m-3">Here Logo Will come</div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          PowerGeneration Analytics
        </Typography>
        <div>
            <PoerGenerationBar/>
        </div>
        <Typography>{date}</Typography>
        <Typography>{description}</Typography>
        
      </CardBody>
      <CardFooter className="pt-0">
        <a href={link} className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            {linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
