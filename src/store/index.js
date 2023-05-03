import { configureStore } from "@reduxjs/toolkit";
import defaultSlice from "./defaultSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        default: defaultSlice
    }
});