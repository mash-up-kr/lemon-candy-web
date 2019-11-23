import { PingActionTypes } from "./types";
import { takeEvery, call, put } from 'redux-saga/effects';
import {PingActions} from "./actions";

function* flowPing() {
  try {
    yield put(PingActions.successPing());
    yield call(console.log, 'flow ping execute');
  } catch(e) {
    yield put(PingActions.failurePing());
  }
}

function* watchPing() {
  try {
    yield takeEvery(PingActionTypes.REQUEST_PING, flowPing);
  } catch (e) {
    yield call(console.error, 'errored in watchPing');
  }
}

export default [watchPing];
