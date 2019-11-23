import {
  all, call, delay, spawn,
} from 'redux-saga/effects';

import PingSaga from '@/store/ping/sagas';

const makeRestartable = (saga: any) => function* () {
  yield spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        console.error('unexpected root saga termination.', saga);
      } catch (e) {
        console.error('Saga error, the saga will be restarted', e);
      }
      yield delay(1000); // Workaround to avoid infinite error loops
    }
  });
};

const sagas = [...PingSaga].map(makeRestartable);

export default function* rootSaga() {
  yield all(sagas.map((saga) => call(saga)));
}
