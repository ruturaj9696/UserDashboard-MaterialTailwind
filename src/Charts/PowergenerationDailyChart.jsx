import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  ButtonGroup,
  Button,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

// Dummy data for the current month (daily data)
const dailyData = [50, 40, 30, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330];
const dailyCategories = Array.from({ length: dailyData.length }, (_, i) => `Day ${i + 1}`);

// Dummy data for the year (monthly data)
const monthlyData = [500, 400, 300, 320, 500, 350, 200, 230, 500, 550, 600, 650];
const monthlyCategories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Dummy data for multiple years (yearly data)
const yearlyData = [6000, 7000, 8000, 9000];
const yearlyCategories = ["2020", "2021", "2022", "2023"];

const chartConfig = {
  type: "bar",
  height: 240,
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
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
      categories: [],
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

export default function PowergenerationDailyChart() {
  const [chartData, setChartData] = useState(dailyData);
  const [categories, setCategories] = useState(dailyCategories);
  const [timePeriod, setTimePeriod] = useState("daily");

  useEffect(() => {
    switch (timePeriod) {
      case "daily":
        setChartData(dailyData);
        setCategories(dailyCategories);
        break;
      case "monthly":
        setChartData(monthlyData);
        setCategories(monthlyCategories);
        break;
      case "yearly":
        setChartData(yearlyData);
        setCategories(yearlyCategories);
        break;
      default:
        break;
    }
  }, [timePeriod]);

  const handleTimePeriodChange = (value) => {
    setTimePeriod(value);
  };

  return (
    <Card className="relative">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div>
          <Typography variant="h6" color="blue-gray">
            Power Generation Graph
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Visualizing the power generation data using a bar graph.
          </Typography>
        </div>
        <ButtonGroup className="flex gap-3">
          <Button
            onClick={() => handleTimePeriodChange("daily")}
            className={`${
              timePeriod === "daily" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            } rounded-lg py-3 px-6 text-xs font-bold uppercase shadow-md transition-all`}
          >
            Daily
          </Button>
          <Button
            onClick={() => handleTimePeriodChange("monthly")}
            className={`${
              timePeriod === "monthly" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            } rounded-lg py-3 px-6 text-xs font-bold uppercase shadow-md transition-all`}
          >
            Monthly
          </Button>
          <Button
            onClick={() => handleTimePeriodChange("yearly")}
            className={`${
              timePeriod === "yearly" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            } rounded-lg py-3 px-6 text-xs font-bold uppercase shadow-md transition-all`}
          >
            Yearly
          </Button>
        </ButtonGroup>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart
          type={chartConfig.type}
          height={chartConfig.height}
          series={[{ name: "Power Generation", data: chartData }]}
          options={{ ...chartConfig.options, xaxis: { ...chartConfig.options.xaxis, categories } }}
        />
      </CardBody>
    </Card>
  );
}
