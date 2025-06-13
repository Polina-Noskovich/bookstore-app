import { createSlice } from '@reduxjs/toolkit';
const favSlice = createSlice({
name: 'favorites',
initialState: { items: [] },
reducers: {
addFavorite(state, action) { state.items.push(action.payload); },
removeFavorite(state, action) {
state.items = state.items.filter(item => item.isbn13 !== action.payload);
},
},
});
export const { addFavorite, removeFavorite } = favSlice.actions;
export default favSlice.reducer;
