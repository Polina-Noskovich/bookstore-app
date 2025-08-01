import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: null,
    token: null,
};
const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
loginSuccess(state, action) {
state.user = action.payload.user;
state.token = action.payload.token;
},
logout(state) {
state.user = null;
state.token = null;
},
},
});
export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
