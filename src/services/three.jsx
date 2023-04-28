import { createSlice } from "@reduxjs/toolkit";

const threeSlice = createSlice({
  name: "Drag",
  initialState: {
    show: true,
    transitionBreak: false,
    transitions: [],
    animation: true,
    id: null,
    currId: null,
  },
  reducers: {
    setShow: (state, action) => {
      state.show = action.payload;
    },
    setAnimation: (state, action) => {
      state.animation = action.payload;
    },
    setTransition: (state, action) => {
      state.animation = false;
      state.show = false;
      state.transitions = action.payload;
      state.transitionBreak = true;
    },
    removeTransition: (state) => {
      state.animation = true;
      state.transitionBreak = false;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setCurrId: (state, action) => {
      state.currId = action.payload;
    },
  },
});

export const {
  setShow,
  setAnimation,
  setTransition,
  removeTransition,
  setId,
  setCurrId,
} = threeSlice.actions;

export default threeSlice.reducer;
