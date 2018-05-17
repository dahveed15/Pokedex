import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  console.log('items reducer');

  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return merge({}, state, action.pokemon.items);
    default:
      return state;
  }
};

export default itemsReducer;
