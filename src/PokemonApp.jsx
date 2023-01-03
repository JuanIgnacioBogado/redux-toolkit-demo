import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemons } from './store/slices';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    dispatch(getPokemons(0));
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <ul>
          {pokemons?.map(({ name, url }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}

      <button
        onClick={() => dispatch(getPokemons(page - 1))}
        disabled={page === 0 || isLoading}
      >
        Anterior
      </button>
      <button
        onClick={() => dispatch(getPokemons(page + 1))}
        disabled={isLoading}
      >
        Siguiente
      </button>
    </>
  );
};
