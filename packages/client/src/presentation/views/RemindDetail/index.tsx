import React from 'react';
import styled from 'styled-components';
import {
  RouteComponentProps,
} from 'react-router-dom';

import Header from '@/presentation/components/header';
import RemindDetailContainer from '@/presentation/containers/RemindDetail';

const S = {
  layout: styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 53px;
    height: 100vh;
  `,
};

const RemindDetail: React.FC<RouteComponentProps> = ({ match }) => (
  <S.layout>
    <Header
      title="리마인드"
      leftSide="<"
      /* eslint-disable-next-line no-restricted-globals */
      leftSideOnClick={ () => { history.back(); } }
    />
    {/* eslint-disable-next-line react/prop-types */}
    <RemindDetailContainer remindId={ match.params.remindId } />
  </S.layout>
);

export default RemindDetail;
