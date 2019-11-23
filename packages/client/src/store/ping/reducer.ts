import produce from 'immer';

import { PingActionTypes } from '@/store/ping/types';


const initialState = {};

const successPing = (state: any, draft: any) => {
  console.log('_success Ping Reducer');
};

export default function pingReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case PingActionTypes.SUCCESS_PING:
        return successPing(action, draft);
      case PingActionTypes.FAILURE_PING:
        return () => {};
      default:
        return state;
    }
  });
}
