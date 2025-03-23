import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data - data quality metrics
const mockData = [
  {
    name: "Q1",
    completeness: 92,
    accuracy: 85,
    consistency: 78,
    timeliness: 96,
  },
  {
    name: "Q2",
    completeness: 94,
    accuracy: 87,
    consistency: 82,
    timeliness: 93,
  },
  {
    name: "Q3",
    completeness: 91,
    accuracy: 89,
    consistency: 85,
    timeliness: 97,
  },
  {
    name: "Q4",
    completeness: 95,
    accuracy: 92,
    consistency: 88,
    timeliness: 94,
  },
];

const DataQualityChart = () => {
  return (
    <div className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={mockData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[70, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="completeness" fill="#8884d8" />
          <Bar dataKey="accuracy" fill="#82ca9d" />
          <Bar dataKey="consistency" fill="#ffc658" />
          <Bar dataKey="timeliness" fill="#ff8042" />
        </BarChart>
      </ResponsiveContainer>
      <div className="chart-description">
        Quarterly data quality performance by dimension
      </div>
    </div>
  );
};

export default DataQualityChart;
