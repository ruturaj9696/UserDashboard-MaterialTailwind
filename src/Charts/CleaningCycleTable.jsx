import React from "react";
import { Button, IconButton, Card, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import BillAnalysis from "../Logos/BillAnalysis.png"
const TABLE_HEAD = [
  "Cycle Number",
  "Cleaning Date",
  "Cleaning Done By",
  "Before Cleaning Image",
  "After Cleaning Image",
  "Inverter Status",
];

const TABLE_ROWS = [
  {
    cycleNumber: "1",
    cleaningDate: "2024-01-01",
    cleaningDoneBy: "John Doe",
    beforeCleaningImage: "before_image_url_1",
    afterCleaningImage: {BillAnalysis},
    inverterStatus: "Active",
  },
  {
    cycleNumber: "2",
    cleaningDate: "2024-01-01",
    cleaningDoneBy: "John Doe",
    beforeCleaningImage: "before_image_url_1",
    afterCleaningImage: "after_image_url_1",
    inverterStatus: "Active",
  },
  {
    cycleNumber: "3",
    cleaningDate: "2024-01-01",
    cleaningDoneBy: "John Doe",
    beforeCleaningImage: "before_image_url_1",
    afterCleaningImage: "after_image_url_1",
    inverterStatus: "Active",
  },
  {
    cycleNumber: "4",
    cleaningDate: "2024-01-01",
    cleaningDoneBy: "John Doe",
    beforeCleaningImage: "before_image_url_1",
    afterCleaningImage: "after_image_url_1",
    inverterStatus: "Active",
  },
  {
    cycleNumber: "5",
    cleaningDate: "2024-01-01",
    cleaningDoneBy: "John Doe",
    beforeCleaningImage: "before_image_url_1",
    afterCleaningImage: "after_image_url_1",
    inverterStatus: "Active",
  },
  {
    cycleNumber: "6",
    cleaningDate: "2024-01-01",
    cleaningDoneBy: "John Doe",
    beforeCleaningImage: "before_image_url_1",
    afterCleaningImage: "after_image_url_1",
    inverterStatus: "Active",
  },
  {
    cycleNumber: "2",
    cleaningDate: "2024-02-01",
    cleaningDoneBy: "Jane Smith",
    beforeCleaningImage: "before_image_url_2",
    afterCleaningImage: "after_image_url_2",
    inverterStatus: "Inactive",
  },
];

const rowsPerPage = 5;

function DefaultPagination({ total, active, setActive }) {
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const totalPages = Math.ceil(total / rowsPerPage);

  const next = () => {
    if (active < totalPages) setActive(active + 1);
  };

  const prev = () => {
    if (active > 1) setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-4 mt-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <IconButton key={index + 1} {...getItemProps(index + 1)}>
            {index + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPages}
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

function CleaningCycleTable() {
  const [activePage, setActivePage] = React.useState(1);

  const startIndex = (activePage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = TABLE_ROWS.slice(startIndex, endIndex);

  return (
    <Card className="h-full w-full rounded-xl">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center"
                style={{
                  width:
                    head === "Cycle Number" || head === "Inverter Status"
                      ? "10%"
                      : "20%",
                }}
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map(
            (
              {
                cycleNumber,
                cleaningDate,
                cleaningDoneBy,
                beforeCleaningImage,
                afterCleaningImage,
                inverterStatus,
              },
              index
            ) => {
              const isLast = index === currentRows.length - 1;
              const classes = isLast
                ? "p-4 text-center"
                : "p-4 border-b border-blue-gray-50 text-center";

              return (
                <tr key={cycleNumber}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {cycleNumber}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {cleaningDate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {cleaningDoneBy}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <img
                      src={beforeCleaningImage}
                      alt="Before Cleaning"
                      className="w-full h-auto"
                    />
                  </td>
                  <td className={classes}>
                    <img
                      src={afterCleaningImage}
                      alt="After Cleaning"
                      className="w-full h-auto"
                    />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {inverterStatus}
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      {TABLE_ROWS.length > rowsPerPage && (
        <DefaultPagination
          total={TABLE_ROWS.length}
          active={activePage}
          setActive={setActivePage}
        />
      )}
    </Card>
  );
}

export default CleaningCycleTable;
