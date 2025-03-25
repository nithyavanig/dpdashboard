import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import useStore from "../store/store";

const RulesModal = ({ ruleId }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  //   const [selectedField, setSelectedField] = useState("");
  const [ruleInput, setRuleInput] = useState("");
  const [ruleIndex, setRuleIndex] = useState("");
  const [clear, setClear] = useState(false);
  const addNewRule = useStore((state) => state.addNewRule);
  const updateRuleData = useStore((state) => state.updateRuleData);
  const removeRule = useStore((state) => state.removeRule);
  const open = useStore((state) => state.openChatModal);
  const setOpenChatModal = useStore((state) => state.setOpenChatModal);
  const rulesData = useStore((state) => state.rulesData);
  const fieldToRefineRules = rulesData.find((rule) => rule.id === ruleId);
  const selectedField = fieldToRefineRules?.field_name;
  const [editRuleNumber, setEditRuleNumber] = useState("");

  // Reset modal state
  const resetModal = () => {
    setSelectedOption(null);
    // setSelectedField("");
    setRuleInput("");
    setRuleIndex("");
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Handle adding a new rule
  const handleAddRule = () => {
    if (fieldToRefineRules.id && ruleInput) {
      addNewRule(fieldToRefineRules.id, ruleInput);
      resetModal();
    }
  };

  // Handle updating a rule
  const handleUpdateRule = () => {
    if (selectedField && ruleInput) {
      updateRuleData(fieldToRefineRules.id, ruleInput, parseInt(ruleIndex) - 1);
      setRuleIndex(undefined);
      resetModal();
    }
  };

  // Handle removing a rule
  const handleRemoveRule = () => {
    if (ruleIndex !== "") {
      removeRule(fieldToRefineRules.id, parseInt(ruleIndex) - 1);
      setRuleIndex("");
      resetModal();
    }
  };

  // Render rules for selected field
  const renderRules = () => {
    // if (!selectedField) return null;

    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Rules for {selectedField}</Typography>
        {fieldToRefineRules?.rule_name?.map((rule, index) => (
          <Typography key={index} variant="body2">
            {index + 1}. {rule}
            <br />
            <br />
          </Typography>
        ))}
      </Box>
    );
  };

  // Render specific input based on selected option
  const renderOptionInput = () => {
    switch (selectedOption) {
      case 1: // Add new rule
        return (
          <Box>
            <Typography>Provide the rule you want to add</Typography>
            <TextField
              multiline
              rows={4}
              fullWidth
              value={ruleInput}
              onChange={(e) => setRuleInput(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Button variant="contained" onClick={handleAddRule} sx={{ mt: 2 }}>
              Add
            </Button>
          </Box>
        );
      case 2: // Edit a rule
        return (
          <Box>
            <Typography>Provide the Rule Index to be updated</Typography>
            <TextField onChange={(e) => setRuleIndex(e.target.value)} />
            {ruleIndex && (
              <>
                <Typography>Enter the updated Rule</Typography>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  value={ruleInput}
                  onChange={(e) => setRuleInput(e.target.value)}
                  sx={{ mt: 2 }}
                />
                <Button
                  variant="contained"
                  onClick={handleUpdateRule}
                  sx={{ mt: 2 }}
                >
                  Update
                </Button>
              </>
            )}
          </Box>
        );
      case 3: // Remove a rule
        return (
          <Box>
            <Typography>Provide the rule index you want to remove</Typography>
            <TextField
              value={ruleIndex}
              fullWidth
              onChange={(e) => setRuleIndex(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              onClick={handleRemoveRule}
              sx={{ mt: 2 }}
            >
              Remove
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpenChatModal(false);
        resetModal();
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "800px",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            borderBottom: "1px solid #e0e0e0",
            pb: 1,
          }}
        >
          <Typography variant="h6">Rule Management</Typography>
          <IconButton
            onClick={() => {
              setOpenChatModal(false);
              resetModal();
            }}
          >
            <MdClose />
          </IconButton>
        </Box>

        {/* Content */}
        <Box>
          {/* Field Selection
          <Box sx={{ mb: 2 }}>
            <Typography>Select Field:</Typography>
            {Object.keys(rulesData).map((field) => (
              <Button
                key={field}
                variant={selectedField === field ? "contained" : "outlined"}
                onClick={() => setSelectedField(field)}
                sx={{ mr: 1, mt: 1 }}
              >
                {field}
              </Button>
            ))}
          </Box> */}

          {/* Rules Display */}
          {renderRules()}

          {/* Footer Options */}
          {selectedField && !selectedOption && (
            <Box sx={{ mt: 2 }}>
              <Typography>Select an option:</Typography>
              <Button
                variant="outlined"
                onClick={() => handleOptionSelect(1)}
                sx={{ mr: 1, mt: 1 }}
              >
                Add New Rule
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleOptionSelect(2)}
                sx={{ mr: 1, mt: 1 }}
              >
                Edit a Rule
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleOptionSelect(3)}
                sx={{ mt: 1 }}
              >
                Remove a Rule
              </Button>
            </Box>
          )}

          {/* Option-specific Input */}
          {selectedOption && <Box sx={{ mt: 2 }}>{renderOptionInput()}</Box>}
        </Box>
      </Box>
    </Modal>
  );
};

export default RulesModal;
