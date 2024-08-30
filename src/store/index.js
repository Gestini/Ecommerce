// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { manageCartSlice } from '@/features/cart';
import { manageProductsSlice } from '@/features/products';
// Configura el store con el reducer del carrito
const store = configureStore({
    reducer: {
        cart: manageCartSlice.reducer,
        products: manageProductsSlice.reducer
    },
});
export default store;
