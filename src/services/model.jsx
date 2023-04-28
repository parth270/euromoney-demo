import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "Drag",
  initialState: {
    id: null,
    show: false,
    currId: null,
  },
  reducers: {
    SetId: (state, action) => {
      state.id = action.payload;
    },
    SetCurrId: (state, action) => {
      state.currId = action.payload;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { SetId, SetCurrId, setShow } = modelSlice.actions;

export default modelSlice.reducer;
