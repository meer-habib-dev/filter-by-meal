import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
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
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
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
  setSearchTerm,
  setEndDate,
  setStartDate,
  setDateRanges,
  setActive,
  setSuperActive,
  setBored,
} = inputSlice.actions;

export default inputSlice.reducer;
