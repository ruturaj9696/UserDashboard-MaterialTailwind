import React from "react";
import { Button, IconButton, Card, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const TABLE_HEAD = ["Details", "Amount", "Payment Date"];
const TABLE_ROWS = [
  { details: "Details about", amount: "100", paymentDate: "25/04/2024" },
  { details: "Details", amount: "120", paymentDate: "12/05/2023" },
  { details: "Details", amount: "120", paymentDate: "22/05/2023" },
  { details: "Details", amount: "120", paymentDate: "22/05/2023" },
  { details: "Details", amount: "120", paymentDate: "22/05/2023" },
  { details: "Details", amount: "130", paymentDate: "23/06/2023" },
  { details: "Details", amount: "140", paymentDate: "15/07/2023" },
  { details: "Details", amount: "150", paymentDate: "01/08/2023" },
  { details: "Details", amount: "160", paymentDate: "10/09/2023" },
  { details: "Details", amount: "170", paymentDate: "05/10/2023" },
  { details: "Details", amount: "180", paymentDate: "11/11/2023" },
  { details: "Details", amount: "190", paymentDate: "20/12/2023" },
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

function PaymentDetailsTable() {
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
                style={{
                  width:
                    head === "Details"
                      ? "40%"
                      : head === "Amount"
                      ? "30%"
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

            return (
              <tr key={index}>
                <td className={classes} style={{ width: "40%" }}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {details}
                  </Typography>
                </td>
                <td className={classes} style={{ width: "30%" }}>
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
