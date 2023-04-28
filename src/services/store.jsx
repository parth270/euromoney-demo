import { configureStore } from "@reduxjs/toolkit";
import threeReducer from "./three";
import modelReducer from "./model";

export const store = configureStore({
  reducer: { three: threeReducer,model:modelReducer},
});
