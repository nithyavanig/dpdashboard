import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data - regulatory coverage by framework
const mockData = [
  { subject: "GDPR", coverage: 92, fullMark: 100 },
  { subject: "HIPAA", coverage: 85, fullMark: 100 },
  { subject: "SOX", coverage: 78, fullMark: 100 },
  { subject: "Basel III", coverage: 95, fullMark: 100 },
  { subject: "CCPA", coverage: 82, fullMark: 100 },
  { subject: "MiFID II", coverage: 88, fullMark: 100 },
];

const CoverageChart = () => {
  return (
    <div className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mockData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Coverage"
            dataKey="coverage"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Tooltip formatter={(value) => [`${value}%`, "Coverage"]} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="chart-description">
        Compliance coverage across regulatory frameworks
      </div>
    </div>
  );
};

export default CoverageChart;
