import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    leftSidebarIn: false,
  },
  reducers: {
    openSidebar: (state) => {
      state.leftSidebarIn = true;
    },
    closeSidebar: (state) => {
      state.leftSidebarIn = false;
    },
  },
});

export const { openSidebar, closeSidebar } = layoutSlice.actions;
export const selectSidebar = (state) => state.layout.leftSidebarIn;

export default layoutSlice.reducer;
