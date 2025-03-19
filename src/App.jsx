import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import DataSources from "./components/DataSources";
import RuleManagement from "./components/RuleManagement";
import IssueTracking from "./components/IssueTracking";
import Reporting from "./components/Reporting";
import Settings from "./components/Settings";
import useStore from "./store/store";
import "./styles/styles.css";

const App = () => {
  const { currentPage, showSidebar, isSidebarPinned } = useStore();

  const renderComponent = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "datasources":
        return <DataSources />;
      case "rulemanagement":
        return <RuleManagement />;
      case "issuetracking":
        return <IssueTracking />;
      case "reporting":
        return <Reporting />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main
        className={`main-content ${
          showSidebar || isSidebarPinned ? "with-sidebar" : ""
        }`}
      >
        {renderComponent()}
      </main>
    </div>
  );
};

export default App;
