import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "./clientSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        client: clientSlice,
        user: userSlice
    }
});