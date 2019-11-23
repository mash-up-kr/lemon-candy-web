import produce from 'immer';
import { PingActionTypes } from '@/store/ping/types';

interface Ping {}

const initialState = {};

const _successPing = (state: any, draft: Ping) => {
  console.log('_success Ping Reducer');
};

export default function pingReducer(state = initialState, action: any) {
  return produce(state, draft => {
    switch(action.type) {
      case PingActionTypes.SUCCESS_PING:
        return _successPing(action, draft);
      case PingActionTypes.FAILURE_PING:
        return () => {};
      default:
        return state;
    }
  })
}
