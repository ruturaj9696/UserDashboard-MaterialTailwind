import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardWithLink({ title, description, link, linkText ,date,graph}) {
  return (
    <Card className="mt-6 mx-4 hover:shadow-2xl">
      <CardBody><img
      className="rounded-2xl py-3"
      style={{ height: '100px', width: '100px' }}
       src="data:image/png;base64,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" />
        {/* <div className="m-3">Here Logo Will come</div> */}


        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
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
