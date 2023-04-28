import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "Drag",
  initialState: {
    id: null,
    show: false,
    currId: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setCurrId: (state, action) => {
      state.currId = action.payload;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { setId,setCurrId, setShow } = modelSlice.actions;

export default modelSlice.reducer;
