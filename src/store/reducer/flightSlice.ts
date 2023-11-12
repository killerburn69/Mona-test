import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";
const initState = {
  flight: {},
  index: -1,
};
const flightSlice = createSlice({
  name: "flight",
  initialState: initState,
  reducers: {
    updateFlight: (state, actions) => {
      state.flight = actions.payload.item;
      state.index = actions.payload.index;
    },
  },
});
export const { updateFlight } = flightSlice.actions;
export default flightSlice.reducer;
export const selectFlight = (state: RootState) => state.flight.flight;
export const selectIndev = (state: RootState) => state.flight.index;
