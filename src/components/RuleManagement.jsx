import React, { useState } from "react";
// import Select from "react-select";
import Select from "@mui/material/Select";
import { PiSpinnerGap } from "react-icons/pi";
import { mockRulesData, regulatoryData } from "../data/regulatoryData";
import "../styles/RuleManagement.css"; // Assuming you have a CSS file for styling
import { Button, InputLabel, MenuItem } from "@mui/material";
import TableComponent from "./TableComponent";
import useStore from "../store/store";
import axios from "axios";

const RuleManagement = () => {
  // const rulesData = useStore((state) => state.rulesData);
  const setRulesData = useStore((state) => state.setRulesData);
  const [regType, setRegType] = useState(""); // Default to the first type
  const [regSubType, setRegSubType] = useState("");
  const [subTypeData, setSubTypeData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [rulesData, setRulesData] = useState();

  const handleRegTypeChange = (event) => {
    setRegType(event.target.value);
    setSubTypeData(regulatoryData[event.target.value]); // Reset sub-type when type changes
  };
  const ddstyles = { width: "20rem" };
  const handleCreateRules = () => {
    //API call to create rules
    // axios.get('').then((response) => {

    // }
    setLoading(true);
    console.log("Creating rules for: ", regType, regSubType);
    setRulesData(mockRulesData);
    setLoading(false);
  };

  return (
    <div>
      <h2>Rule Management</h2>
      <p>Create and Manage validation rules for regulatory compliance.</p>
      <div
        className="rule-management-container"
        style={{ height: "400px", padding: "20px" }}
      >
        <div className="reg-dropdowns">
          <InputLabel>Regulatory Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            className="basic-single"
            aria-placeholder="Select Regulatory Type"
            value={regType}
            label="Regulatory Type"
            onChange={handleRegTypeChange}
            style={ddstyles}
          >
            {Object.keys(regulatoryData).map((type) => (
              <MenuItem value={type}>{type}</MenuItem>
            ))}
          </Select>

          <InputLabel>Sub Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            className="basic-single"
            aria-placeholder="Select Regulatory Sub Type"
            value={regSubType}
            label="Sub Type"
            onChange={(event) => setRegSubType(event.target.value)}
            style={ddstyles}
          >
            {subTypeData.map((type) => (
              <MenuItem value={type}>{type}</MenuItem>
            ))}
          </Select>

          <Button onClick={handleCreateRules}>{"Create Rules"}</Button>
        </div>

        {!loading && (
          <div className="rules-table">
            <TableComponent />
          </div>
        )}
        {loading && (
          <div className="loading-icon-wrapper">
            <PiSpinnerGap size={60} color={"#9b9a9e"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RuleManagement;
