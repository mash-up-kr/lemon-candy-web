import React, { useEffect, useState } from 'react';

import S from './styles';
import Loading from '@/presentation/components/Lodaing';
import Error from '@/presentation/components/Error';

const RemindListContainer: React.FC = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const randomState = (Math.floor((Math.random() * 10) % 2)) ? 200 : 500;
    setTimeout(() => { setState(randomState); }, 1500);
  }, []);

  const renderFetchView = () => (
    // eslint-disable-next-line no-nested-ternary
    state === 0
      ? <Loading />
      : state === 200
        ? renderContentsView()
        : <Error />
  );

  const renderContentsView = () => (
    <div>
      안녕하세요
    </div>
  )

  return (
    <S.layout>
      { renderFetchView() }
    </S.layout>
  );
};

export default RemindListContainer;
