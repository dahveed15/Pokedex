import React from 'react';
import ReactDOM from 'react-dom';
import { fetchPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, receiveSinglePokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPokemon = fetchPokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
