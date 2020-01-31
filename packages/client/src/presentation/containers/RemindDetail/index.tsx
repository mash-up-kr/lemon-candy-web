import React, { useEffect, useState } from 'react';

import S from './styles';
import Loading from '@/presentation/components/Lodaing';
import Error from '@/presentation/components/Error';
import { REMIND } from '@/presentation/containers/RemindList/ListLayout';
import { MOCK_DATA } from '@/config';
import RemindDetailLayout from '@/presentation/containers/RemindDetail/Layout';

interface Props {
  remindId: string;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface EMOTION_RANK {
  count: number;
  emotion: number;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface REMIND_DETAIL {
  emotionRank: EMOTION_RANK[];
  command?: string;
  endDate: string;
  remindId: number;
  startDate: string;
  title?: string;
}


const RemindDetailContainer: React.FC<Props> = ({ remindId }: Props) => {
  const [state, setState] = useState(0);
  const [detail, setDetail] = useState();

  useEffect(() => {
    setTimeout(() => { fetch(); }, 500);
  }, []);

  // eslint-disable-next-line radix
  const isNumber = (value: string): boolean => parseInt(value) === parseInt(value);
  // eslint-disable-next-line radix
  const getReminds = (id: string): REMIND | undefined => MOCK_DATA.reminds.find((item) => item.remindId === parseInt(id));
  const getRemindDetail = (id: number) => MOCK_DATA.remind_detail[id - 1];


  const fetch = () => {
    if (!isNumber(remindId)) {
      setState(500);

      return;
    }

    const data = getReminds(remindId);

    if (!data) {
      setState(500);

      return;
    }
    if (!data.command) {
      // eslint-disable-next-line no-restricted-globals
      location.href = '/';

      return;
    }

    // eslint-disable-next-line radix
    const currentDetail = getRemindDetail(parseInt(remindId));
    setDetail(currentDetail);
    setState(200);
  };
  const renderFetchView = () => (
    // eslint-disable-next-line no-nested-ternary
    state === 0
      ? <Loading />
      : state === 200
        ? <RemindDetailLayout detail={ detail } />
        : <Error />
  );

  return (
    <S.layout>
      {renderFetchView()}
    </S.layout>
  );
};

export default RemindDetailContainer;
