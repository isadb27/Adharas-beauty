import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
  name: string;
  email: string;
  role: "client" | "seller"; // importante para redirigir a cada perfil
  image?: string; // <- agregamos propiedad opcional para la foto
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
    // Opcional: actualizar imagen del usuario
    updateUserImage: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.image = action.payload;
      }
    },
  },
});

export const { signUpUser, loginUser, logoutUser, updateUserImage } = authSlice.actions;
export default authSlice.reducer;
