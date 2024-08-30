import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, Products } from '@/types/Products';
import { RootState } from '@/store';

interface ProductsState {
    data: Products;
    filteredData: Products;
    currentProduct: Product | null;
    productsPerPage: number;
    totalPage: number;
    currentPage: number;
    activeFilter: string;
    searchResults: Products;
    searchQuery: string,
}

const initialState: ProductsState = {
    data: [],
    filteredData: [],
    currentProduct: null,
    productsPerPage: 5,
    totalPage: 0,
    currentPage: 0,
    activeFilter: 'Todos',
    searchResults: [],
    searchQuery: ''
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
            state.searchResults = action.payload;
            state.totalPage = Math.ceil(action.payload.length / state.productsPerPage);
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            const newPage = action.payload;
            if (newPage >= 0 && newPage < state.totalPage) {
                state.currentPage = newPage;
            }
        },
        setFilteredProducts: (state, action: PayloadAction<Products>) => {
            state.filteredData = action.payload;
            state.totalPage = Math.ceil(action.payload.length / state.productsPerPage);
            state.currentPage = 0;
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            const newProduct = action.payload;
            const existingProduct = state.data.find(product => product.id === newProduct.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.data.push({ ...newProduct, quantity: 1 });
            }
            state.totalPage = Math.ceil(state.data.length / state.productsPerPage);
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
            state.totalPage = Math.ceil(state.filteredData.length / state.productsPerPage);
            state.currentPage = 0;
        },
        applyFilter: (state, action: PayloadAction<string>) => {
            state.activeFilter = action.payload;
            let productosFiltrados = [...state.filteredData];

            switch (action.payload) {
                case 'Menor precio':
                    productosFiltrados = productosFiltrados.sort((a, b) => a.price - b.price);
                    break;
                case 'Mayor precio':
                    productosFiltrados = productosFiltrados.sort((a, b) => b.price - a.price);
                    break;
                case 'A-Z':
                    productosFiltrados = productosFiltrados.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'Más reciente':
                default:
                    break;
            }

            state.filteredData = productosFiltrados;
            state.totalPage = Math.ceil(productosFiltrados.length / state.productsPerPage);
            state.currentPage = 0;
        },
    },
});

// Selector para obtener los productos a mostrar en la página actual
export const selectProductsToDisplay = (state: RootState) => {
    const { currentPage, productsPerPage, filteredData } = state.products;
    const startIdx = currentPage * productsPerPage;
    const endIdx = startIdx + productsPerPage;
    return filteredData.slice(startIdx, endIdx);
};

export const { setCurrentProduct, decreaseProductQuantity, setSearchQuery, setProducts, setCurrentPage, setFilteredProducts, addProduct, removeProduct, applyFilter } = manageProductsSlice.actions;

export default manageProductsSlice.reducer;
