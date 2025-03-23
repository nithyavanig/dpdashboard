import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data - issues by type
const mockData = [
  { name: "Data Integrity", value: 45, color: "#FF8042" },
  { name: "Validation", value: 30, color: "#00C49F" },
  { name: "Reporting", value: 15, color: "#FFBB28" },
  { name: "Compliance", value: 10, color: "#0088FE" },
];

const IssuesChart = () => {
  return (
    <div className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={mockData}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {mockData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} issues`, "Count"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-description">
        Distribution of open issues across categories
      </div>
    </div>
  );
};

export default IssuesChart;
