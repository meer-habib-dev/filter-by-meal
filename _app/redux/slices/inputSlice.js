import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: "",
  endDate: "",
  dateRange: [],
  active: 0,
  superActive: 0,
  bored: 0,
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setDateRanges: (state, action) => {
      state.dateRange = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setSuperActive: (state, action) => {
      state.superActive = action.payload;
    },
    setBored: (state, action) => {
      state.bored = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setEndDate,
  setStartDate,
  setDateRanges,
  setActive,
  setSuperActive,
  setBored,
} = inputSlice.actions;

export default inputSlice.reducer;
