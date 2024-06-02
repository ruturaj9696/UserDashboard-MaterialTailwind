import React from 'react';
import Reports from "../Logos/Reports.png"
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PowerGenerationBar from "../Charts/PowerGenerationBar";
import Report from "../Logos/Report.png"
export function ReportCard({ title, description, link, linkText ,date,graph}) {
  return (
    <Card className="mt-6 mx-4 hover:shadow-2xl">
      <CardBody>
        <img src={Report} alt="Reports" className='h-24' />
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-5">
          Reports
        </Typography>
        <Typography>
            This Tab contains All kind of Reports.
        </Typography>
      </CardBody>
    </Card>
  );
}
