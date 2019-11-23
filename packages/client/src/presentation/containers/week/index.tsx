import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { PingActionTypes } from "../../../store/ping/types";

const WeekContainer: React.FC = () => {
  const dispatch = useDispatch();
  const requestPing = useCallback(() => {
    dispatch({ type: PingActionTypes.REQUEST_PING})
  }, [dispatch]);

  return (
    <div onClick={requestPing}>안녕</div>
  );
};

export default WeekContainer;
