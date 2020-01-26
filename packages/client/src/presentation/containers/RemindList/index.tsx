import React, { useEffect, useState } from 'react';

import Error from '@/presentation/components/Error';
import Loading from '@/presentation/components/Lodaing';
import RemindListLayout from '@/presentation/containers/RemindList/ListLayout';

import S from './styles';

const MOCK_DATA = {
  reminds: [
    {
      bestEmotion: 0,
      command: '진짜 시간 빠르다..',
      endDate: '2019-12-08',
      remindId: 1,
      startDate: '2019-12-02',
      title: '이제 곧 올해도 끝',
    },
    {
      bestEmotion: 0,
      command: '오늘도 화이팅',
      endDate: '2020-01-12',
      remindId: 2,
      startDate: '2020-01-06',
      title: '안녕',
    },
    {
      bestEmotion: 0,
      command: null,
      endDate: '2020-01-19',
      remindId: 3,
      startDate: '2020-01-13',
      title: null,
    },
  ],
  empty_reminds: [],
};

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
        ? <RemindListLayout reminds={ MOCK_DATA.reminds } />
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
