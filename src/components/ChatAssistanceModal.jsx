import React from "react";
import { Modal, Box, IconButton, Typography } from "@mui/material";
import useStore from "../store/store";
import ChatRelay from "./ChatRelay";
import Textarea from "./MUIComponents/TextArea";
import "../styles/refinemodal.css";
import { FaCircleChevronRight, FaPlus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const ChatAssistanceModal = ({ ruleId }) => {
  const open = useStore((state) => state.openChatModal);
  const updateRule = useStore((state) => state.updateRule);
  const setOpenChatModal = useStore((state) => state.setOpenChatModal);
  const currentRule = useStore((state) =>
    state.rulesData.find((rule) => rule.id === ruleId)
  );
  const chatHistory = currentRule?.chatHistory ?? [];
  const [currentPrompt, setCurrentPrompt] = React.useState("");

  const handleClose = () => {
    setOpenChatModal(false);
  };

  const handleUserPromptChange = (event) => {
    setCurrentPrompt(event.target.value);
  };

  const handleNewChat = () => {
    // Clear chat history logic here
    const currentRuleData = { ...currentRule, chatHistory: [] };
    updateRule(currentRuleData);
  };

  const callSearchAPI = () => {
    // Call API to refine rule with newPrompt
    const response = "Refined rule response";
    // Replace with actual API response
    const currentChatHistory = [...chatHistory];
    currentChatHistory.push({ prompt: currentPrompt, response: response });
    const currentRuleData = { ...currentRule, chatHistory: currentChatHistory };
    updateRule(currentRuleData);
    setCurrentPrompt(""); // Clear input after sending
  };

  return (
    <div className="refine-modal">
      <Modal
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown
        disableAutoFocus
        disableEnforceFocus
        disableRestoreFocus
        hideBackdrop={false}
        disablePortal={false}
        keepMounted
        BackdropProps={{
          onClick: (e) => {
            // Prevent closing when clicking outside
            e.stopPropagation();
          },
        }}
      >
        <Box
          sx={{
            position: "fixed",
            right: 0,
            top: "15%", // Center vertically (100% - 70%)/2
            width: "35%",
            height: "70%",
            bgcolor: "background.paper",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", // Prevent outer box from scrolling
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <IconButton onClick={handleNewChat} aria-label="new chat">
              <FaPlus />
            </IconButton>
            <Typography variant="h6">Refine Rule</Typography>
            <IconButton onClick={handleClose} aria-label="close">
              <MdClose />
            </IconButton>
          </Box>

          {/* Scrollable Content */}
          <Box
            sx={{
              flex: 1,
              overflow: "auto",
              p: 2,
            }}
          >
            {chatHistory?.map((chatContent, index) => (
              <ChatRelay
                key={index}
                prompt={chatContent.prompt}
                response={chatContent.response}
                isPublish={true}
                ruleId={ruleId}
              />
            ))}
          </Box>

          {/* Footer with Input */}
          <Box
            sx={{
              p: 2,
              borderTop: "1px solid #e0e0e0",
              display: "flex",
              alignItems: "flex-end",
              gap: 1,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Textarea
                aria-label="prompt input"
                placeholder="How do you want to refine the rule further ..."
                minRows={2}
                maxRows={4}
                value={currentPrompt}
                onChange={handleUserPromptChange}
                sx={{ width: "100%" }}
              />
            </Box>
            <IconButton
              onClick={callSearchAPI}
              disabled={!currentPrompt?.length}
              sx={{
                mb: 1,
                opacity: currentPrompt?.length ? 1 : 0.5,
                transition: "opacity 0.2s",
              }}
            >
              <FaCircleChevronRight color="#3399FF" size={25} />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ChatAssistanceModal;
