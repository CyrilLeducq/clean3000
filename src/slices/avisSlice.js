
import { createSlice } from '@reduxjs/toolkit';

const initialAvisState = {
  avisList: [], 
};

const avisSlice = createSlice({
  name: 'avis',
  initialState: initialAvisState,
  reducers: {
    addAvis(state, action) {
      const { id, clientId, date } = action.payload;
      state.avisList.push({ id, clientId, date });
    },
  
  },
});

export const { addAvis } = avisSlice.actions;

export default avisSlice.reducer;
