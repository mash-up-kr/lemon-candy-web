import LOTTIE_SAMPLE from '@lemon/icons/lottie/angro.json';
import dayjs from 'dayjs';
import React from 'react';
import {
  Link,
  RouteComponentProps,
  useHistory,
} from 'react-router-dom';
import styled from 'styled-components';

import FloatingButton from '@/presentation/components/FloatingButton';
import Header from '@/presentation/components/header';
import LottieComp from '@/presentation/components/LottieComp';

const S = {
  layout: styled.section`
    width: 100%;
    min-height: 100vh;
    padding-top: 53px;
    height: 100vh;
  `,
  lottieLayout: styled.div`
    width: 100%;
    max-width: 600px;
    z-index: 10;
    position: absolute;
    bottom: 0;
    margin-bottom: 48px;
  `,
};

const MainView = () => {
  const history = useHistory();
  const actionLogout = () => {
    localStorage.removeItem('MONNDAY_TOKEN');
    history.push('/login');
  }
  return (
    <S.layout>
      <Header
        title={ dayjs().format('YYYY') }
        leftSide={ <Link to="/setting">설정</Link> }
        rightSide={ <Link to="/reminds">리마인드</Link> }
      />
      <S.lottieLayout>
        <LottieComp animationData={ LOTTIE_SAMPLE } isActive width="100%" height="100%" />
      </S.lottieLayout>
      <FloatingButton onClick={ () => { history.push('/write'); } } />
    </S.layout>
  );
}

export default MainView;
