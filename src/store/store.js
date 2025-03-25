import { create } from "zustand";

const useStore = create((set) => ({
  currentPage: "dashboard",
  isSidebarPinned: false,
  showSidebar: false,
  setCurrentPage: (page) => set({ currentPage: page }),
  toggleSidebarPin: () =>
    set((state) => ({ isSidebarPinned: !state.isSidebarPinned })),
  showSidebarMenu: () => set({ showSidebar: true }),
  hideSidebarMenu: () =>
    set((state) => ({ showSidebar: state.isSidebarPinned ? true : false })),
  totalReports: 7,
  // Dashboard data
  // These values are just placeholders. You can replace them with actual data from your API or state management.
  validationRules: 128,
  openIssues: 23,
  averageRiskScore: 67,
  riskScoreTrends: [10, 20, 30, 40, 50],
  issuesByType: [5, 10, 15, 20],
  dataQualityMetrics: [80, 85, 90, 95],
  regulatoryCoverage: [60, 70, 80, 90],
  setTotalReports: (totalReports) => set({ totalReports }),
  setValidationRules: (validationRules) => set({ validationRules }),
  setOpenIssues: (openIssues) => set({ openIssues }),
  setAverageRiskScore: (averageRiskScore) => set({ averageRiskScore }),
  setRiskScoreTrends: (riskScoreTrends) => set({ riskScoreTrends }),
  setIssuesByType: (issuesByType) => set({ issuesByType }),
  //Rule Management data
  rulesData: [],
  setRulesData: (rulesData) => set({ rulesData }),
  addRule: (rule) =>
    set((state) => ({ rulesData: [...state.rulesData, rule] })),
  updateRule: (updatedRule) =>
    set((state) => ({
      rulesData: state.rulesData.map((rule) =>
        rule.id === updatedRule.id ? updatedRule : rule
      ),
    })),
  addNewRule: (id, newRule) =>
    set((state) => ({
      rulesData: state.rulesData.map((rule) =>
        rule.id === id
          ? { ...rule, rule_name: [...rule.rule_name, newRule] }
          : rule
      ),
    })),
  updateRuleData: (id, newRule, index) =>
    set((state) => ({
      rulesData: state.rulesData.map((rule) =>
        rule.id === id
          ? {
              ...rule,
              rule_name: rule.rule_name.map((r, i) =>
                i === index ? newRule : r
              ),
            }
          : rule
      ),
    })),
  removeRule: (id, index) =>
    set((state) => ({
      rulesData: state.rulesData.map((rule) => {
        if (rule.id === id) {
          const updatedRuleName = [...rule.rule_name]; // Create a shallow copy of the rule_name array
          updatedRuleName.splice(index, 1); // Remove the item at the specified index
          return { ...rule, rule_name: updatedRuleName }; // Return the updated rule
        }
        return rule; // Return the rule as is if the id doesn't match
      }),
    })),
  // Chat Modal and Relay
  openChatModal: false,
  setOpenChatModal: (isOpen) => set({ openChatModal: isOpen }),
  //Issue Tracking data
  issuesTrackingData: [],
  setIssuesTrackingData: (issuesTrackingData) => set({ issuesTrackingData }),
  setRemediation: (issueId, remediation) =>
    set((state) => ({
      issuesTrackingData: state.issuesTrackingData.map((issue) =>
        issue.id === issueId ? { ...issue, remediation } : issue
      ),
    })),
}));

export default useStore;
