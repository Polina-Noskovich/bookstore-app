import { configureStore } from '@reduxjs/toolkit';
import { bookApi } from '../features/books/bookApi';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
export const store = configureStore({
reducer: {
[bookApi.reducerPath]: bookApi.reducer,
auth: authReducer,
cart: cartReducer,
favorites: favoritesReducer,
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(bookApi.middleware),
});