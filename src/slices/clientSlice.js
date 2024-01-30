import { createSlice } from '@reduxjs/toolkit';

const initialClients = [
  { id: 1, name: "Jardins d'Ariana", address: '', email: '' },
  { id: 2, name: 'Jérôme Livran', address: '', email: '' },
  { id: 3, name: 'Philippe Parguey', address: '', email: '' },
  { id: 4, name: 'Archimed', address: '', email: '' },
  { id: 5, name: 'BeCom', address: '', email: '' }
];

const clientSlice = createSlice({
  name: 'clients',
  initialState: initialClients,
  reducers: {
    addClient: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addClient } = clientSlice.actions;

export default clientSlice.reducer;