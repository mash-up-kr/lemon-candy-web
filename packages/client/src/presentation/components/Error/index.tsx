import colors from '@lemon/colors';
import Hum from '@lemon/icons/imgs/hum.png';
import React from 'react';

import S from './styles';

interface Props {
  onClick?: () => {};
}

const Error: React.FC<Props> = ({
  onClick = () => { window.location.reload(); },
}) => (
  <S.layout background={ colors.black1000 }>
    <S.img src={ Hum } />
    <S.contents color={ colors.black0 }>
      끄응..
      <br />
      이게 또 왜 이럴까..
    </S.contents>
    <S.button
      color={ colors.black1000 }
      background={ colors.black0 }
      onClick={ onClick }
    >
      재시도
    </S.button>
  </S.layout>
);

export default Error;
