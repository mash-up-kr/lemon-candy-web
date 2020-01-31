import React from 'react';
import {
  RouteComponentProps,
} from 'react-router-dom';
import styled from 'styled-components';

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

interface Props {
  remindId?: string | undefined;
}

const RemindDetail: React.FC<RouteComponentProps<Props>> = ({ match }) => {
  // eslint-disable-next-line react/prop-types
  const remindId = match.params.remindId ? match.params.remindId : '';

  return (
    <S.layout>
      <Header
        title="리마인드"
        leftSide="<"
        /* eslint-disable-next-line no-restricted-globals */
        leftSideOnClick={ () => { history.back(); } }
      />
      <RemindDetailContainer remindId={ remindId } />
    </S.layout>
  );
}

export default RemindDetail;
