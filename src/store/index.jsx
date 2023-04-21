import { configureStore } from '@reduxjs/toolkit';
import { trainerNameSlice } from './slices/trainerNameSlice';

export const store =  configureStore({
    reducer: {
        trainerName: trainerNameSlice.reducer
    }
});

// export default store;

