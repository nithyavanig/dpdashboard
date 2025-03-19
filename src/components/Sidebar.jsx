import React, { useEffect } from "react";
import useStore from "../store/store";

const Sidebar = () => {
  const {
    currentPage,
    setCurrentPage,
    isSidebarPinned,
    toggleSidebarPin,
    showSidebar,
    showSidebarMenu,
    hideSidebarMenu,
  } = useStore();

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "datasources", label: "Data Sources" },
    { id: "rulemanagement", label: "Rule Management" },
    { id: "issuetracking", label: "Issue Tracking" },
    { id: "reporting", label: "Reporting" },
    { id: "settings", label: "Settings" },
  ];

  useEffect(() => {
    // Clean up function to hide sidebar when component unmounts
    return () => {
      if (!isSidebarPinned) {
        hideSidebarMenu();
      }
    };
  }, [hideSidebarMenu, isSidebarPinned]);

  return (
    <>
      <div className="sidebar-trigger" onMouseEnter={showSidebarMenu}></div>
      <div
        className={`sidebar ${showSidebar ? "visible" : ""}`}
        onMouseLeave={hideSidebarMenu}
      >
        <button className="pin-button" onClick={toggleSidebarPin}>
          {isSidebarPinned ? "📌" : "📍"}
        </button>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${
              currentPage === item.id ? "active" : ""
            }`}
            onClick={() => setCurrentPage(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
