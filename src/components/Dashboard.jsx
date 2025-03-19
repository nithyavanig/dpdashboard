import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="summary-cards">
        <div className="card blue-card">
          <h3>Total Reports</h3>
          <div className="value">7</div>
        </div>
        <div className="card green-card">
          <h3>Validation Rules</h3>
          <div className="value">128</div>
        </div>
        <div className="card orange-card">
          <h3>Open Issues</h3>
          <div className="value">23</div>
        </div>
        <div className="card purple-card">
          <h3>Average Risk Score</h3>
          <div className="value">67%</div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart">
          <h2>Risk Score Trends</h2>
          <div className="placeholder-chart">Risk Score Chart</div>
        </div>
        <div className="chart">
          <h2>Issues by Type</h2>
          <div className="placeholder-chart">Issues Chart</div>
        </div>
      </div>

      <div className="chart-container" style={{ marginTop: "20px" }}>
        <div className="chart">
          <h2>Data Quality Metrics</h2>
          <div className="placeholder-chart">Data Quality Chart</div>
        </div>
        <div className="chart">
          <h2>Regulatory Coverage</h2>
          <div className="placeholder-chart">Coverage Chart</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
