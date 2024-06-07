import React from "react";
import { Button, IconButton, Card, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// Updated table headers and rows
const TABLE_HEAD = ["Reading Date", "Input Reading", "Expert Reading", "Net Reading", "Generation Reading", "Expert Bill"];
const TABLE_ROWS = [
  { readingDate: "2024-01-01", inputReading: "150", expertReading: "155", netReading: "5", generationReading: "100", expertBill: "$50" },
  { readingDate: "2024-02-01", inputReading: "160", expertReading: "165", netReading: "5", generationReading: "105", expertBill: "$55" },
  { readingDate: "2024-03-01", inputReading: "170", expertReading: "175", netReading: "5", generationReading: "110", expertBill: "$60" },
  { readingDate: "2024-04-01", inputReading: "180", expertReading: "185", netReading: "5", generationReading: "115", expertBill: "$65" },
  { readingDate: "2024-05-01", inputReading: "190", expertReading: "195", netReading: "5", generationReading: "120", expertBill: "$70" },
  { readingDate: "2024-06-01", inputReading: "200", expertReading: "205", netReading: "5", generationReading: "125", expertBill: "$75" },
  { readingDate: "2024-07-01", inputReading: "210", expertReading: "215", netReading: "5", generationReading: "130", expertBill: "$80" },
  { readingDate: "2024-08-01", inputReading: "220", expertReading: "225", netReading: "5", generationReading: "135", expertBill: "$85" },
  { readingDate: "2024-09-01", inputReading: "230", expertReading: "235", netReading: "5", generationReading: "140", expertBill: "$90" },
  { readingDate: "2024-10-01", inputReading: "240", expertReading: "245", netReading: "5", generationReading: "145", expertBill: "$95" },
  { readingDate: "2024-11-01", inputReading: "250", expertReading: "255", netReading: "5", generationReading: "150", expertBill: "$100" },
  { readingDate: "2024-12-01", inputReading: "260", expertReading: "265", netReading: "5", generationReading: "155", expertBill: "$105" },
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
    <div className="flex items-center gap-4">
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

function BillAnalysisChart() {
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
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                style={{ width: "16.6%" }}
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
          {currentRows.map(({ readingDate, inputReading, expertReading, netReading, generationReading, expertBill }, index) => {
            const isLast = index === currentRows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={readingDate}>
                <td className={classes} style={{ width: "16.6%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {readingDate}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "16.6%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {inputReading}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "16.6%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {expertReading}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "16.6%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {netReading}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "16.6%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {generationReading}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "16.6%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {expertBill}
                  </Typography>
                </td>
              </tr>
            );
          })}
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

export default BillAnalysisChart;
