import { createSlice } from '@reduxjs/toolkit';

export const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: 'Mero',
    reducers: {
        getTrainerName: (state, action) => {
            const trainerName = action.payload;
            return trainerName;
        } 
    }
});

export const { getTrainerName } = trainerNameSlice.actions;

// export default trainerNameSlice.reducer;

