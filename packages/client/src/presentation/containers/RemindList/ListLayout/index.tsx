import Colors from '@lemon/colors';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import RemindItem from '@/presentation/containers/RemindList/ListLayout/Item';

import S from './styles';

export interface REMIND {
  bestEmotion: number;
  command?: null | string;
  endDate: string;
  remindId: number;
  startDate: string;
  title?: null | string;
}

interface Props {
  reminds: REMIND[];
}

// @ts-ignore
const RemindListLayout: React.FC<Props> = ({
  reminds,
}) => {

  const renderView = () => {
    const sortingReminds = reminds.sort((prev, val) => val.remindId - prev.remindId);
    let year = '';
    let month = '';

    return (
      sortingReminds.map((item) => {
        const currentYear = dayjs(item.startDate).format('YYYY');
        const currentMonth = dayjs(item.startDate).format('MM');

        const component = (
          <div key={ item.remindId }>
            { year !== currentYear && <S.year color={ Colors.black100 }>{currentYear}</S.year> }
            { month !== currentMonth && <S.month color={ Colors.black100 }>{currentMonth}월</S.month> }
            <RemindItem remind={ item } />
          </div>
        );
        year = currentYear;
        month = currentMonth;
        console.log('ttt', component);

        return component;
      })
    );
  };

  return (
    <S.layout>
      { renderView() }
    </S.layout>
  );
};

export default RemindListLayout;
