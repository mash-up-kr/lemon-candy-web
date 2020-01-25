import colors from '@lemon/colors';
import React from 'react';

import S from './styles';

const NotFound = () => {
  const ActionHistoryBack = () => {
    // eslint-disable-next-line no-restricted-globals
    history.back();
  };

  return (
    <S.layout background={ colors.black1000 }>
      <S.subTitle color={ colors.black0 }>
        404 ERROR!
      </S.subTitle>
      <S.title color={ colors.black0 }>
        길을 잃었다. 어딜 가야 할까...
      </S.title>
      <S.contents color={ colors.black0 }>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        입력하신 주소가 정확한지 다시 확인해 주세요.
      </S.contents>
      <S.button
        color={ colors.black1000 }
        background={ colors.black0 }
        onClick={ ActionHistoryBack }
      >
        뒤로가기
      </S.button>
    </S.layout>
  );
};

export default NotFound;
