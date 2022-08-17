import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/useLoginUserProvider";

export default configureStore({
  reducer: {
    user: reducer
  }
});