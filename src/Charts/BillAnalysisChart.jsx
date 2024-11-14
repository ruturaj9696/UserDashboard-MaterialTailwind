import React from "react";
import { Button, IconButton, Card, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// Updated table headers and rows
const TABLE_HEAD = [
  "Reading Date",
  "Import Reading",
  "Export Reading",
  "Net Reading",
  "Generation Reading",
  "Expected Bill Amount",
];

const TABLE_ROWS = [
  {
    readingDate: "2024-01-01",
    importReading: "820",
    exportReading: "310",
    netReading: "510",
    generationReading: "605",
    expectedBillAmount: "₹76500",
  },
  {
    readingDate: "2024-02-01",
    importReading: "835",
    exportReading: "325",
    netReading: "510",
    generationReading: "610",
    expectedBillAmount: "₹76500",
  },
  {
    readingDate: "2024-03-01",
    importReading: "850",
    exportReading: "330",
    netReading: "520",
    generationReading: "615",
    expectedBillAmount: "₹78000",
  },
  {
    readingDate: "2024-04-01",
    importReading: "860",
    exportReading: "340",
    netReading: "520",
    generationReading: "620",
    expectedBillAmount: "₹78000",
  },
  {
    readingDate: "2024-05-01",
    importReading: "870",
    exportReading: "350",
    netReading: "520",
    generationReading: "625",
    expectedBillAmount: "₹78000",
  },
  {
    readingDate: "2024-06-01",
    importReading: "885",
    exportReading: "360",
    netReading: "525",
    generationReading: "630",
    expectedBillAmount: "₹78750",
  },
  {
    readingDate: "2024-07-01",
    importReading: "895",
    exportReading: "370",
    netReading: "525",
    generationReading: "635",
    expectedBillAmount: "₹78750",
  },
  {
    readingDate: "2024-08-01",
    importReading: "910",
    exportReading: "380",
    netReading: "530",
    generationReading: "640",
    expectedBillAmount: "₹79500",
  },
  {
    readingDate: "2024-09-01",
    importReading: "920",
    exportReading: "390",
    netReading: "530",
    generationReading: "645",
    expectedBillAmount: "₹79500",
  },
  {
    readingDate: "2024-10-01",
    importReading: "930",
    exportReading: "400",
    netReading: "530",
    generationReading: "650",
    expectedBillAmount: "₹79500",
  },
  {
    readingDate: "2024-11-01",
    importReading: "940",
    exportReading: "405",
    netReading: "535",
    generationReading: "655",
    expectedBillAmount: "₹80250",
  },
  {
    readingDate: "2024-12-01",
    importReading: "955",
    exportReading: "410",
    netReading: "545",
    generationReading: "660",
    expectedBillAmount: "₹81750",
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
          {currentRows.map(
            (
              {
                readingDate,
                importReading,
                exportReading,
                netReading,
                generationReading,
                expectedBillAmount,
              },
              index
            ) => {
              const isLast = index === currentRows.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

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
                      {importReading}
                    </Typography>
                  </td>
                  <td className={classes} style={{ width: "16.6%" }}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {exportReading}
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
                      {expectedBillAmount}
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

export default BillAnalysisChart;
