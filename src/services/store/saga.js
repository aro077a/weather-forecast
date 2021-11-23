import { call, put, takeLatest } from 'redux-saga/effects'

import { actions } from './index';

import { getWeatherData } from '../api';

function* getWeatherForecast(action) {
  try {
    const weatherData = yield call(getWeatherData, action.payload);
    yield put({ type: actions.SET_DATA, payload: weatherData.data });
  } catch (e) {
    yield put({ type: actions.SET_DATA, payload: [] });
    yield put({ type: actions.SET_ERROR, payload: e.response.data.message });
  }
}

function* rootSaga() {
  yield takeLatest(actions.LOAD_DATA, getWeatherForecast);
}

export default rootSaga;