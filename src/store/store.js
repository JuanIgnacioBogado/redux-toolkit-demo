import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis';

import { counterSlice, pokemonSlice } from './slices';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todosApi.middleware)
});
