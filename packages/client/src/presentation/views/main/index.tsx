import IMG_SAMPLE from '@lemon/icons/imgs/sample.png';
import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

import FloatingButton from '@/presentation/components/FloatingButton';
import Header from '@/presentation/components/header';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const say = (val: string) => () => console.log('say', val);

const S = {
  layout: styled.section`
    width: 100%;
    min-height: 100vh;
    padding-top: 53px;
    height: 100vh;
  `,
  lottie: styled.img`
    width: 100%;
    max-width: 600px;
    z-index: 10;
    position: absolute;
    bottom: 0;
    margin-bottom: 48px;
  `,
};

const MainView = () => (
  <S.layout>
    <Header
      title={ dayjs().format('YYYY') }
      leftSide={ <Link to="/setting">설정</Link> }
      rightSide={ <Link to="/remind">리마인드</Link> }
    />
    <S.lottie
      src={ IMG_SAMPLE }
    />
    <Link style={{ color: 'white' }}to='/monthlist'>여기로 가면 감옥뷰 나옴</Link>
    <FloatingButton onClick={ say('클릭') } />
  </S.layout>
);

export default MainView;
