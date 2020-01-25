import colors from '@lemon/colors';
import { Oops } from '@lemon/icons';
import React from 'react';

import S from './styles';

interface Props {
  onClick?: () => {};
}

const Error: React.FC<Props> = ({
  onClick = () => { window.location.reload(); },
}) => (
  <S.layout background={ colors.black1000 }>
    <S.subTitle color={ colors.black0 }>
      Oops..!
    </S.subTitle>
    <S.img src={ Oops } />
    <S.contents color={ colors.black0 }>
      일시적 오류가 발생했습니다.
      <br />
      다시 한번 시도해주세요.
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
