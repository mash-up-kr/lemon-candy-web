import React from 'react';

import S from './styles';

interface Props {
  year: string;
}

const MainContainer: React.FC<Props> = ({
  year,
}) => {
  return (
    <S.layout>
      안녕하세요
    </S.layout>
  );
};

export default MainContainer;
