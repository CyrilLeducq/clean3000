import {createSlice} from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'clients',
    initialState: [],
    reducers: {
        addClient: (state, action) => {
            state.push(action,payload);
        },
    },
});

export const { addClient } = clientSlice.actions;

export default clientSlice.reducer;