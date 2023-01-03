import { pokemonApi } from '../../../api/pokemonApi';
import { startLoadingPokemons, setPokemons } from './';

export const getPokemons = (page = 0) => async dispatch => {
  dispatch(startLoadingPokemons());
  const { data: { results } } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
  dispatch(setPokemons({ results, page }));
};
