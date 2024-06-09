import React from "react";
import { Button, IconButton, Card, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const TABLE_HEAD = ["Details", "Amount", "Payment Date", "Pending Amount"];
const TABLE_ROWS = [
  { details: "First Payment", amount: 10000, paymentDate: "25/04/2024" },
  { details: "second payment", amount: 1000, paymentDate: "12/05/2023" },
  { details: "Third payment", amount: 200, paymentDate: "22/05/2023" },
  { details: "Fourth payment", amount: 500, paymentDate: "22/05/2023" },
  { details: "Fifth payment", amount: 300, paymentDate: "22/05/2023" },
];

const rowsPerPage = 10;

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

function PaymentDetailsTable({ contractValue }) {
  const [activePage, setActivePage] = React.useState(1);

  const startIndex = (activePage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = TABLE_ROWS.slice(startIndex, endIndex);

  let previousPendingValue = contractValue;

  return (
    <Card className="h-full w-full rounded-xl">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                style={{
                  width:
                    head === "Details"
                      ? "30%"
                      : head === "Amount" || head === "Pending Amount"
                      ? "20%"
                      : "30%",
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
          {currentRows.map(({ details, amount, paymentDate }, index) => {
            const isLast = index === currentRows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            const pendingAmount =
              index === 0
                ? contractValue - amount
                : previousPendingValue - amount;

            previousPendingValue = pendingAmount;

            return (
              <tr key={index}>
                <td className={classes} style={{ width: "30%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {details}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "20%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {amount}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "30%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {paymentDate}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "20%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {pendingAmount > 0
                      ? pendingAmount
                      : "All payments done successfully !"}
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

export default PaymentDetailsTable;
