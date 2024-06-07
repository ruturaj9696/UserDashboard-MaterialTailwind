import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const initialChartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Epi Value",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      show: "Epi Chart",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const dataByYear = {
  2022: [93, 82, 90, 90, 95, 89, 56, 89, 95, 89, 56, 89],
  2023: [50, 30, 60, 70, 75, 99, 66, 99, 75, 96, 66, 99],
  2024: [60, 40, 80, 80, 95, 69, 76, 49, 85, 99, 76, 85],
};

export default function Example() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [chartConfig, setChartConfig] = useState(initialChartConfig);

  useEffect(() => {
    const filteredData = dataByYear[selectedYear] || [];
    setChartConfig((prevConfig) => ({
      ...prevConfig,
      series: [
        {
          ...prevConfig.series[0],
          data: filteredData,
        },
      ],
    }));
  }, [selectedYear]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div>
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            ></Typography>
          </div>
          <div className="flex items-center">
            <label htmlFor="yearSelect" className="mr-2">
              Select Year:
            </label>
            <select
              id="yearSelect"
              value={selectedYear}
              onChange={handleYearChange}
              className="border rounded p-1"
            >
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
