import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  productName: string;
  price: string;
  details: string;
  image: string | null;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
