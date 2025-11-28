import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchProductsByCategory } from "../api/productsApi";
import type { Product } from "../types/Product";

interface ProductsState {
  products: Product[];
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
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
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

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
