import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import layoutReducer from "../features/layoutSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    layout: layoutReducer,
    mail: mailReducer,
  },
});
