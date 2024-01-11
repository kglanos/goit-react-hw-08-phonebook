import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

function setCommonState(state, action) {
    state.isLoggedIn = true;
    state.user = action.payload.user;
    state.user.email = action.payload.email;
    state.token = action.payload.token;
}

const initialState = {
    isLoggedIn: false,
    user: { name: null, email: null },
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, setCommonState);
        builder.addCase(login.fulfilled, setCommonState);
        builder.addCase(logout.fulfilled, () => initialState);
        builder.addCase(refreshUser.pending, (state, action) => {
            state.isRefreshing = true;
        });
        builder.addCase(refreshUser.rejected, (state, action) => {
            state.isRefreshing = false;
        });
        builder.addCase(refreshUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isRefreshing = false;
        });
    },
});

export const authReducer = authSlice.reducer;