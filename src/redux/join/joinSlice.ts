import { createSlice } from "@reduxjs/toolkit";
import { IJoinState } from "./model";

const initialState: IJoinState = {
  joinValue: null,
  isJoined: null,
  terms: null,
};
const joinSlice = createSlice({
  name: "joinValue",
  initialState,
  reducers: {
    setJoinValue: (state, action) => {
      state.joinValue = { ...state.joinValue, ...action.payload };
    },
    setIsJoined: (state, action) => {
      state.isJoined = action.payload;
    },
    getTerms: (state, action) => {
      state.terms = action.payload;
    },
  },
});
export const { setJoinValue, setIsJoined, getTerms } = joinSlice.actions;
export default joinSlice.reducer;
