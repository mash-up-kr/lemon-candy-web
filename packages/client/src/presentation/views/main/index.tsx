import IMG_SAMPLE from '@lemon/icons/imgs/sample.png';
import React from 'react';
import styled from 'styled-components';

import FloatingButton from '@/presentation/components/FloatingButton';
import Header from '@/presentation/components/header';

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
      title="2019"
      leftSide="설정"
      rightSide="리마인드"
    />
    <S.lottie
      src={ IMG_SAMPLE }
    />
    <FloatingButton onClick={ say('클릭') } />
  </S.layout>
);

export default MainView;
