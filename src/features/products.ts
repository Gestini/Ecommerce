import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, Products } from '@/types/Products';

interface ProductsState {
    data: Products;
    filteredData: Products;
    currentProduct: Product | null;
    productsPerPage: number;
    totalPage: number;
    currentPage: number;
}

const initialState: ProductsState = {
    data: [],
    filteredData: [],
    currentProduct: null,
    productsPerPage: 5,
    totalPage: 0, // Número total de páginas
    currentPage: 0, // Página actual (empezando desde 0)
};

export const manageProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCurrentProduct: (state, action: PayloadAction<Product>) => {
            state.currentProduct = action.payload;
        },
        setProducts: (state, action: PayloadAction<Products>) => {
            state.data = action.payload;
            state.filteredData = action.payload;
            state.totalPage = Math.ceil(action.payload.length / state.productsPerPage); // Calcula el número total de páginas
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            const newPage = action.payload;
            if (newPage >= 0 && newPage < state.totalPage) {
                state.currentPage = newPage; // Cambia a la página seleccionada si es válida
            }
        },
        setFilteredProducts: (state, action: PayloadAction<Products>) => {
            state.filteredData = action.payload;
            state.totalPage = Math.ceil(action.payload.length / state.productsPerPage); // Actualiza el número total de páginas
            state.currentPage = 0; // Reinicia a la primera página al filtrar
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            const newProduct = action.payload;
            const existingProduct = state.data.find(product => product.id === newProduct.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.data.push({ ...newProduct, quantity: 1 });
            }
            state.totalPage = Math.ceil(state.data.length / state.productsPerPage); // Actualiza el número total de páginas
        },
        decreaseProductQuantity: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            const existingProduct = state.data.find(product => product.id === productId);

            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            state.data = state.data.filter(product => product.id !== productId);
            state.filteredData = state.filteredData.filter(product => product.id !== productId);
            state.totalPage = Math.ceil(state.filteredData.length / state.productsPerPage); // Actualiza el número total de páginas
            state.currentPage = 0; // Reinicia a la primera página al eliminar un producto
        },
    },
});

export const { setCurrentProduct, decreaseProductQuantity, setProducts, setCurrentPage, setFilteredProducts, addProduct, removeProduct } = manageProductsSlice.actions;

export default manageProductsSlice.reducer;
