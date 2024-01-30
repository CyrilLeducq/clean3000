import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './slices/clientSlice';

export default configureStore({
  reducer: {
    clients: clientReducer,
    
  },
});