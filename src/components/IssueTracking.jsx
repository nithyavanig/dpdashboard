import React from "react";
import { IssueTrackingTable } from "./IssueTrackingTable";
import useStore from "../store/store";
import { Button, TextField } from "@mui/material";
import "../styles/issueTracking.css";
import { mockIssues } from "../data/regulatoryData";

const IssueTracking = () => {
  const setIssuesTrackingData = useStore(
    (state) => state.setIssuesTrackingData
  );
  const handleApplyRules = () => {
    //API call to apply rules
    console.log("apply rules");
    setIssuesTrackingData(mockIssues);
  };
  return (
    <div>
      <h2>Issue Tracking</h2>
      <p>Track and manage data quality and compliance issues.</p>
      <div className="data-selection-container">
        <TextField id="standard-basic" label="Dataset url" variant="outlined" />
        <Button onClick={handleApplyRules}>{"Apply Rules"}</Button>
      </div>
      <div
        className="issue-tracking-container"
        // style={{ height: "400px", marginTop: "20px" }}
      >
        <IssueTrackingTable />
      </div>
    </div>
  );
};

export default IssueTracking;
