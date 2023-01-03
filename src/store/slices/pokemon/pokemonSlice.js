import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemons: state => {
      state.isLoading = true;
    },
    setPokemons: (state, { payload }) => {
      state.isLoading = false;
      state.pokemons = payload.results;
      state.page = payload.page
    }
  }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
