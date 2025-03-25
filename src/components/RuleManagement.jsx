import React, { useState } from "react";
// import Select from "react-select";
import Select from "@mui/material/Select";
import { PiSpinnerGap } from "react-icons/pi";
import { mockRulesData, regulatoryData } from "../data/regulatoryData";
import "../styles/RuleManagement.css"; // Assuming you have a CSS file for styling
import { Button, InputLabel, MenuItem, TextField } from "@mui/material";
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
  const [uploadedFileName, setUploadedFileName] = useState("");
  // const [rulesData, setRulesData] = useState();

  const handleRegTypeChange = (event) => {
    setRegType(event.target.value);
    setSubTypeData(regulatoryData[event.target.value]); // Reset sub-type when type changes
  };
  const ddstyles = { width: "20rem" };
  const handleCreateRules = async () => {
    //API call to create rules
    const formData = new FormData();
    const pdfResponse = await fetch(
      "/resources/federal_reserve_regulations.pdf"
    );
    const pdfblob = await pdfResponse.blob();
    const datasetResponse = await fetch("/resources/input_dataset.xlsx");
    const datasetBlob = await datasetResponse.blob();
    // formData.append("dataset", datasetBlob, "input_dataset.xlsx");
    // formData.append("pdf", pdfblob, "federal_reserve_regulations.pdf");

    const datasetFile = new File([datasetBlob], "dataset.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const pdfFile = new File([pdfblob], "federal_reserve.pdf", {
      type: "application/pdf",
    });

    formData.append("dataset", datasetFile);
    formData.append("pdf", pdfFile);
    formData.append("fuzzy_match", true); // Boolean value for fuzzy_match
    formData.append("context_window", 250);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8005/extract-rules/"
        // formData,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );

      if (response.status === 200) {
        let ruleData = [];
        Object.entries(response.data).forEach(([key, value]) => {
          if (value?.length > 0) {
            let valueData = [];
            value.forEach((rule) => {
              valueData.push(rule);
            });
            ruleData.push({
              id: "rule_" + key,
              field_name: key,
              rule_name: valueData,
              rule_syntax: "",
            });
          }
        });
        setRulesData(ruleData);
        console.log("Rules created successfully:", response.data);
      }
    } catch (error) {
      console.error("Error creating rules:", error);
    } finally {
      setLoading(false);
    }
    // axios
    //   .post("http://127.0.0.1:8005/extract-rules/")
    //   .then((response) => {
    //     console.log(response.json());
    //     if (response.status === 200) {
    //       setRulesData(response.data);
    //       console.log("Rules created successfully");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // setLoading(true);
    // console.log("Creating rules for: ", regType, regSubType);
    // setRulesData(mockRulesData);
    // setLoading(false);
  };
  // const onUploadPdf = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setUploadedFileName(file.name); // Set the uploaded file name
  //     console.log("File uploaded:", file);
  //   }
  // };

  return (
    <div>
      <h2>Rule Management</h2>
      <p>Create and Manage validation rules for regulatory compliance.</p>
      <div
        className="rule-management-container"
        style={{ height: "400px", padding: "20px" }}
      >
        <div className="reg-dropdowns">
          {/* {
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
          } */}
          <div className="input-data-container">
            <InputLabel>Sample dataset : </InputLabel>
            {/* <TextField
            type="file"
            inputProps={{ accept: "application/pdf" }}
            onChange={onUploadPdf}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          /> */}
            <p style={{ marginTop: "0.5rem", color: "green" }}>
              {"sample_dataset.xlsx"}
            </p>
          </div>
          {uploadedFileName && (
            <p style={{ marginTop: "0.5rem", color: "green" }}>
              Uploaded File: {uploadedFileName}
            </p>
          )}

          <Button onClick={handleCreateRules}>{"Create Rules"}</Button>
        </div>

        {!loading && (
          <div className="rules-table">
            <TableComponent />
          </div>
        )}
        {loading && (
          <div className="loading-icon-wrapper">
            <p>Please wait for a few minutes while we create the rules ...</p>
            <PiSpinnerGap size={60} color={"#9b9a9e"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RuleManagement;
