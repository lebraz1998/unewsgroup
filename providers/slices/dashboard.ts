import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updateDashboardState: 0,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardUpdating: (state) => {
      state.updateDashboardState = Date.now();
      return state;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setDashboardUpdating,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;