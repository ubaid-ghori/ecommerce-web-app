"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProduct = state.items.find(item => item.productId === productId);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
