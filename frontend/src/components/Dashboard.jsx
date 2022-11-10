import React from "react";
import { Chart } from "react-google-charts";

const Dashboard = () => {
  const data = [
    ["Time", "Sales"],
    ["1", 1000],
    ["2", 1170],
    ["3", 660],
    ["4", 1030],
    ["6", 1030],
    ["5", 1023],
    ["7", 1013],
    ["8", 1043],
    ["9", 1793],
    ["10", 1903],
    ["11", 1203],
    ["12", 1013],
    ["13", 1003],
    ["14", 1863],
    ["15", 1023],
  ];

  const options = {
    chart: {
      title: "Product Performance",
      subtitle: "Sales, Expenses, and Profit: In last 15 Minutes.",
    },
  };

  return (
    <div className="dashboard">
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Dashboard;
