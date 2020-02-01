import React from 'react';
import styled from 'styled-components';

import Header from '@/presentation/components/header';
import RemindListContainer from '@/presentation/containers/RemindList';

const S = {
  layout: styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 53px;
    height: 100vh;
  `,
};

const RemindList = () => (
  <S.layout>
    <Header
      title="리마인드 리스트"
      leftSide="<"
      /* eslint-disable-next-line no-restricted-globals */
      leftSideOnClick={ () => { history.back(); } }
    />
    <RemindListContainer />
  </S.layout>
);

export default RemindList;
