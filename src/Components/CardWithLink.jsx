import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardWithLink({
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
          src={link}
          alt="Description of the image"
        />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{date}</Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}
