import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './slices/clientSlice';
import avisReducer from './slices/avisSlice';

export default configureStore({
  reducer: {
    clients: clientReducer,
    avis: avisReducer, 
  },
});

