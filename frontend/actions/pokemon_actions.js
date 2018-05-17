import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = pokemon => {
  console.log('receiveAllPokemon action');
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receivePokemon = pokemon => {
  return {
    type: RECEIVE_POKEMON,
    pokemon
  };
};




export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(serverPokemon => dispatch(receiveAllPokemon(serverPokemon)))
);

export const requestPokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemon(id)
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);
