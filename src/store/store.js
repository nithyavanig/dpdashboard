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
}));

export default useStore;
