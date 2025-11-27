import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    auth: authReducer,
  },
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
