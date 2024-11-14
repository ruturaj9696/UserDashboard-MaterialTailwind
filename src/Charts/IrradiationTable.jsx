import React from "react";
import { Button, IconButton, Card, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const TABLE_HEAD = ["Month", "Irradiation", "Location"];
const TABLE_ROWS = [
  { month: "January", irradiation: "5.5 kWh/m²/day", location: "Pune" },
  { month: "February", irradiation: "5.8 kWh/m²/day", location: "Pune" },
  { month: "March", irradiation: "6.3 kWh/m²/day", location: "Pune" },
  { month: "April", irradiation: "6.7 kWh/m²/day", location: "Pune" },
  { month: "May", irradiation: "6.9 kWh/m²/day", location: "Pune" },
  { month: "June", irradiation: "6.5 kWh/m²/day", location: "Pune" },
  { month: "July", irradiation: "6.2 kWh/m²/day", location: "Pune" },
  { month: "August", irradiation: "6.4 kWh/m²/day", location: "Pune" },
  { month: "September", irradiation: "6.6 kWh/m²/day", location: "Pune" },
  { month: "October", irradiation: "6.3 kWh/m²/day", location: "Pune" },
  { month: "November", irradiation: "5.7 kWh/m²/day", location: "Pune" },
  { month: "December", irradiation: "5.6 kWh/m²/day", location: "Pune" },
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

function DefaultTable() {
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
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center"
                style={{
                  width:
                    head === "Month"
                      ? "20%"
                      : head === "Irradiation"
                      ? "40%"
                      : "40%",
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
          {currentRows.map(({ month, irradiation, location }, index) => {
            const isLast = index === currentRows.length - 1;
            const classes = isLast
              ? "p-4 text-center"
              : "p-4 border-b border-blue-gray-50 text-center";

            return (
              <tr key={month}>
                <td className={classes} style={{ width: "20%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {month}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "40%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {irradiation}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "40%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {location}
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

export default DefaultTable;
