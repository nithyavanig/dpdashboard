import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data - 12 months of risk score trends
const mockData = [
  { month: "Jan", riskScore: 78, threshold: 80 },
  { month: "Feb", riskScore: 75, threshold: 80 },
  { month: "Mar", riskScore: 82, threshold: 80 },
  { month: "Apr", riskScore: 79, threshold: 80 },
  { month: "May", riskScore: 85, threshold: 80 },
  { month: "Jun", riskScore: 72, threshold: 80 },
  { month: "Jul", riskScore: 68, threshold: 80 },
  { month: "Aug", riskScore: 74, threshold: 80 },
  { month: "Sep", riskScore: 77, threshold: 80 },
  { month: "Oct", riskScore: 81, threshold: 80 },
  { month: "Nov", riskScore: 79, threshold: 80 },
  { month: "Dec", riskScore: 83, threshold: 80 },
];

const RiskScoreChart = () => {
  return (
    <div className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={mockData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[60, 90]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="riskScore"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="threshold"
            stroke="#ff7300"
            strokeDasharray="5 5"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="chart-description">
        Monthly risk score trends against threshold
      </div>
    </div>
  );
};

export default RiskScoreChart;
