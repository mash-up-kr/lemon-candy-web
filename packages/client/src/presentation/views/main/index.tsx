import { BlueJelly } from '@lemon/icons';
import React from 'react';
import styled from 'styled-components';

import FloatingButton from '@/presentation/components/floatingButton';
import Header from '@/presentation/components/header';
import EmotionCalendar from '@/presentation/containers/emotionCalendar';
import dayjs from 'dayjs';

const say = (val: string) => () => console.log('say', val);

const currentS = {
  char: styled.img`
    position: fixed;
    z-index: 10;
    bottom: 0;
    right: 0;
  `,
};

const MainView = () => (
  <div>
    <Header
      title={ dayjs().format('YYYY') }
      leftSide="설정"
      rightSide="리마인드"
    />
    <EmotionCalendar />
    <currentS.char
      src={ BlueJelly }
      alt="몬스터 이미지"
      width="100%"
    />
    <FloatingButton onClick={ say('클릭') } />
  </div>
);

export default MainView;
