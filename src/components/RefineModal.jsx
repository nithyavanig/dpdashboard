import React from "react";
import { Modal, Box } from "@mui/material";
import useStore from "../store/store";
import ChatRelay from "./ChatRelay";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflow: "auto",
};

export const RefineModal = ({ ruleId }) => {
  const open = useStore((state) => state.openChatModal);
  // const rulesData = useStore((state) => state.rulesData);
  const setOpenChatModal = useStore((state) => state.setOpenChatModal);
  const currentRule = useStore((state) =>
    state.rulesData.find((rule) => rule.id === ruleId)
  );
  const chatHistory = currentRule?.chatHistory;

  const handleClose = () => {
    setOpenChatModal(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {chatHistory?.map((chatContent) => {
            return (
              <ChatRelay
                prompt={chatContent.prompt}
                response={chatContent.response}
              />
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};
