import React from 'react';

import S from './styles';

interface Props {
  remindId: string;
}


const RemindDetailContainer: React.FC<Props> = ({ remindId }) => {
  return (
    <S.layout>
      안녕하세요 { remindId }
    </S.layout>
  );
};

export default RemindDetailContainer;
