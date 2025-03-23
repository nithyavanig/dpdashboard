import React from "react";
import "../styles/chatRelay.css";
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { Button } from "@mui/material";
import useStore from "../store/store";

export const ChatRelay = ({ prompt, response, isPublish, ruleId }) => {
  const currentRule = useStore((state) =>
    state.rulesData.find((rule) => rule.id === ruleId)
  );
  const updateRule = useStore((state) => state.updateRule);
  const setOpenChatModal = useStore((state) => state.setOpenChatModal);
  const [saved, setSaved] = React.useState(false);
  const saveRule = () => {
    // const currentChatHistory = [...currentRule.chatHistory];
    // currentChatHistory.push({ prompt: prompt, response: response });
    const currentRuleData = {
      ...currentRule,
      chatHistory: [...currentRule.chatHistory],
      rule_syntax: response,
    };
    updateRule(currentRuleData);
    setSaved(true);
    setTimeout(() => {
      setOpenChatModal(false);
    }, 1000);
  };
  return (
    <div>
      <div className="response-chat-container">
        <div className="user-prompt-box">
          <div className="user-icon-text">
            <span>
              <FaUser />
            </span>
            <span>You</span>
          </div>
          <div>{prompt}</div>
        </div>
        <div className="bot-response-box">
          <div className="bot-resp-head">
            <span>
              <RiRobot2Fill />
            </span>
            <span>Compass</span>
          </div>
          <div>
            {response}
            {isPublish && <Button onClick={saveRule}>Save Rule</Button>}
          </div>
          {saved && <span>Rule Saved</span>}
        </div>
      </div>
    </div>
  );
};

export default ChatRelay;
