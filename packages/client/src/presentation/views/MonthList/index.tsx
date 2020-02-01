import React, { useEffect } from 'react';
import Header from '@/presentation/components/header';
import back from '@lemon/icons/svgs/btn-main-back.svg';
import dayjs from 'dayjs';
import MonthListComp from '@/presentation/containers/monthList';
import { useDispatch } from 'react-redux';
import { HomeActionTypes } from '@/store/home/types';
import { useHistory } from 'react-router-dom';


function useApiCall() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: HomeActionTypes.REQUEST_HOME });
  }, [])
}

const MonthList = () => {
  useApiCall();
  const history = useHistory();
  return (
    <div>
      <Header 
      leftSide={<img src={back} onClick={() => history.goBack()}/>}
      title={ dayjs().format('MM월') }/>
      <MonthListComp />
    </div>
  );
}

export default MonthList;
