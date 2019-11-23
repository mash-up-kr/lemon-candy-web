import { action } from 'typesafe-actions';

import { PingActionTypes } from '@/store/ping/types';

export const PingActions = {
  requestPing: () => action(PingActionTypes.REQUEST_PING),
  successPing: () => action(PingActionTypes.SUCCESS_PING),
  failurePing: (e?: Error) => action(PingActionTypes.FAILURE_PING, e),
};

export default PingActions;
