import { createSlice } from "@reduxjs/toolkit";
import { IResturant } from "./model";

const initialState: IResturant = {
  resturantInfo: null,
  seat: null,
};
const resturantSlice = createSlice({
  name: "resturantInfo",
  initialState,
  reducers: {
    getResturantData: (state, action) => {
      state.resturantInfo = { ...state.resturantInfo, ...action.payload };
    },
    getSeatAre: (state, action) => {
      state.seat = action.payload;
    },
  },
});
export const { getResturantData, getSeatAre } = resturantSlice.actions;
export default resturantSlice.reducer;
