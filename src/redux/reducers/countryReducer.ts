import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Filters
  filterRegion: "",
  filterContinent: "",
  filterSearch: "",
  // Orders
  orderCountries: "asc",
  // Pagination
  startPage: 0,
  endPage: 10,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    changeStartPage(state, action: PayloadAction<number>) {
      state.startPage = action.payload * 10;
    },
    // Filters
    addFilterSearch(state, action: PayloadAction<string>) {
      state.filterSearch = action.payload;
    },
    addFilterContinent(state, action: PayloadAction<string>) {
      state.filterContinent = action.payload;
    },
    addFilterRegion(state, action: PayloadAction<string>) {
      state.filterRegion = action.payload;
    },
    // Orders
    addOrderCountries(state, action: PayloadAction<string>) {
      state.orderCountries = action.payload;
    },
    // ClearFilters and Order reset
    clearFilters(state) {
      state.filterContinent = "";
      state.filterRegion = "";
      state.orderCountries = "asc";
    },
  },
});

export const {
  changeStartPage,
  // Filters
  addFilterSearch,
  addFilterContinent,
  addFilterRegion,
  // Orders
  addOrderCountries,
  // ClearFilters and Order reset
  clearFilters,
} = countrySlice.actions;
export default countrySlice.reducer;
