import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';

export const actions = {
  LOAD_DATA: 'root/load-data',
  SET_DATA: 'root/set-data',
  SET_ERROR: 'root/set-error'
};

export const loadData = (city) => ({ type: actions.LOAD_DATA, payload: city });

const initialState = {
  loading: false,
  data: {},
  error: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOAD_DATA:
      return { ...state, loading: true, error: '' };
    case actions.SET_DATA:
      return { ...state, loading: false, data: action.payload, error: '' };
    case actions.SET_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
