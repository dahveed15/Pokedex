import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';

const rooteducer = combineReducers({
  entities: entitiesReducer
});

export default entitiesReducer;
