import colors from '@lemon/colors';
import React from 'react';

import Hum from '@lemon/icons/imgs/hum.png';
import S from './styles';

const Loading: React.FC = () => (
  <S.layout background={ colors.black1000 }>
    <S.img src={ Hum } motion={ S.imgMotion } />
    <S.contents color={ colors.black0 }>
      끄응..
      <br />
      로딩 중...
    </S.contents>
  </S.layout>
);

export default Loading;
