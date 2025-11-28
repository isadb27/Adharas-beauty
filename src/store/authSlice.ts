import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
  name: string;
  email: string;
  role: "client" | "seller";
}

interface AuthState {
  user: AuthUser | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    loginUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { signUpUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
