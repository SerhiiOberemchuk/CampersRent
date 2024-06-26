import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getAllCampersThunk } from "./operations";

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
    showModal: (state, { payload }) => {
      state.isModallMoreInfo = true;
      state.idCamperShowMore = payload;
      state.camperMoreInfo = state.campers.find((item) => item._id === payload);
    },
    closeModal: (state) => {
      state.isModallMoreInfo = false;
      state.idCamperShowMore = null;
      state.camperMoreInfo = null;
    },
    addToFavorite: (state, { payload }) => {
      state.arrayFavoriteCampers.push(
        state.campers.find((camper) => camper._id === payload)
      );
    },
    dellFromFavorite: (state, { payload }) => {
      state.arrayFavoriteCampers.splice(
        state.arrayFavoriteCampers.findIndex((item) => item._id === payload),
        1
      );
    },

    setFilters: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCampersThunk.pending, handlePending)
      .addCase(getAllCampersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isButtonLoadMore =
          payload.length < state.limitItemsOfCampers ? false : true;
        state.campers = [...state.campers, ...payload];
      })
      .addCase(getAllCampersThunk.rejected, handleRejected),
});

export const {
  nextPage,
  showModal,
  closeModal,
  dellFromFavorite,
  addToFavorite,
  setFilters,
} = campersSlice.actions;

export const campersReduser = campersSlice.reducer;
