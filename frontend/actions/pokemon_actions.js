export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = pokemon => {
  console.log('receiveAllPokemon action');
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};
