import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  console.log('pokemon reducer');
  //raise error if state attempts to get mutated
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
      return merge({}, state, {[action.pokemon.id]: action.pokemon});
    default:
      return state;
  }
};

export default pokemonReducer;
