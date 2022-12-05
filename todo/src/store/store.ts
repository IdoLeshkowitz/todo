import {createStore, combineReducers, applyMiddleware} from 'redux';
import {listReducer} from '../reducers/list.reducer'
import {uiReducer} from '../reducers/ui.reducer';
import {logger} from '../middleware/logger';
import {api} from '../middleware/api';

const initialState = {
  items: [],
  loading: false,
};

const rootReducer = combineReducers({
  items: listReducer,
  loading: uiReducer,
})

const middleware = [logger, api];

export const store = createStore(
  rootReducer, 
  initialState,
  applyMiddleware(...middleware)
);