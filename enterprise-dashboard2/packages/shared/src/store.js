import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from './slices/auth';
import { authSlice, analyticsSlice } from './slices';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        analytics: analyticsSlice.reducer
    },
});