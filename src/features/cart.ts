// cartSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { Product, Products } from '@/types/Products';

interface CartState {
  data: Products;
}

const initialState: CartState = {
  data: [],
};

export const manageCartSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    addProductToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.data.find(p => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.data.push({ ...product, quantity });
      }
    },
    decreaseProductQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProduct = state.data.find(p => p.id === productId);

      if (existingProduct && existingProduct.quantity > quantity) {
        existingProduct.quantity -= quantity;
      }
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      state.data = state.data.filter(p => p.id !== productId);
    },
    clearCart: (state) => {
      state.data = [];
    },
  },
});

export const { addProductToCart, decreaseProductQuantity, setProducts, removeProductFromCart, clearCart } = manageCartSlice.actions;

export default manageCartSlice.reducer;
