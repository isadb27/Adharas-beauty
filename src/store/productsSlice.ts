import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsByCategory } from "../api/productsApi";

interface ProductsState {
  products: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const loadProductsByCategory = createAsyncThunk(
  "products/loadByCategory",
  async (categorySlug: string) => {
    const data = await fetchProductsByCategory(categorySlug);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(loadProductsByCategory.rejected, (state) => {
        state.loading = false;
        state.error = "Error loading products";
      });
  },
});

export default productsSlice.reducer;
