import Colors from '@lemon/colors';
import dayjs from 'dayjs';
import React from 'react';

import { REMIND_DETAIL } from '../index';
import S from './styles';

interface Props {
  detail: REMIND_DETAIL;
}

const RemindDetailLayout = ({
  detail,
}: Props) => {
  const date = `${dayjs(detail.startDate).format('MM월 DD일')} - ${dayjs(detail.endDate).format('MM월 DD일')}`;

  return (
    <S.layout>
      <S.date color={ Colors.black0 }>{date}</S.date>
    </S.layout>
  );
}

export default RemindDetailLayout;
