import { call, delay, put } from 'redux-saga/effects';

import { historyAction } from '@/store/history/reducer';

const MOCK_DATA: object = {
  remind: false,
  year: [],
};

function* getHistory() {
  try {
    console.log('getHistory Start');
    yield delay(3000);
    console.log('getHistory End');
    yield put(historyAction.success(MOCK_DATA));
  } catch (error) {
    yield put(historyAction.failure(error));
  }
}

export default [getHistory];
