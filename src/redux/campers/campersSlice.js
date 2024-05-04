import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getAllCampersThunk, getCamperByIdThunk } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.pageOfCampers += 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCampersThunk.pending, handlePending)
      .addCase(getAllCampersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.campers = [...state.campers, ...payload];
      })
      .addCase(getAllCampersThunk.rejected, handleRejected)
      .addCase(getCamperByIdThunk.pending, handlePending)
      .addCase(getCamperByIdThunk.fulfilled, (state, { payload }) => {
        state.camperMoreInfo = payload;
        state.isLoading = false;
      })
      .addCase(getCamperByIdThunk.rejected, handleRejected),
});

export const { nextPage } = campersSlice.actions;

export const campersReduser = campersSlice.reducer;
