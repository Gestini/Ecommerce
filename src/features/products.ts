// cartSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { Product, Products } from '@/types/Products';

interface ProducsState {
    data: Products;
    currentProduct: Product | null;
}

const initialState: ProducsState = {
    data: [],
    currentProduct: null
};

export const manageProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload
        },
        setProducts(state, action) {
            state.data = action.payload;
        },
        addProduct: (state, action) => {
            const newProduct = action.payload as Product;
            const existingProduct = state.data.find(product => product.id === newProduct.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.data.push({ ...newProduct, quantity: 1 });
            }
        },
        decreaseProductQuantity: (state, action) => {
            const productId = action.payload as number;
            const existingProduct = state.data.find(product => product.id === productId);

            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
        },
        removeProduct: (state, action) => {
            const productId = action.payload as number;
            state.data = state.data.filter(product => product.id !== productId);
        },
    },
});

export const { setCurrentProduct, decreaseProductQuantity, setProducts, addProduct, removeProduct } = manageProductsSlice.actions;

export default manageProductsSlice.reducer;
