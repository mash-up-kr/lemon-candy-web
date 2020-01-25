import colors from '@lemon/colors';
import React from 'react';

import IMG_LOADING from '@lemon/icons/imgs/loading.png';
import S from './styles';

const Loading: React.FC = () => (
  <S.layout background={ colors.black1000 }>
    <S.img src={ IMG_LOADING } motion={ S.imgMotion } />
    <S.contents color={ colors.black0 }>
      열심히
      <br />
      로딩 중..!
    </S.contents>
  </S.layout>
);

export default Loading;
