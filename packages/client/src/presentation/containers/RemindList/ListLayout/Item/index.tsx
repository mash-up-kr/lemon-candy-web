import Colors from '@lemon/colors';
import React from 'react';

import S from './styles';
// @ts-ignore
import { REMIND } from '@/presentation/containers/RemindList/ListLayout';
import dayjs from 'dayjs';

interface Props {
  remind: REMIND;
}

const RemindItem: React.FC<Props> = ({
  remind
}) => (
  remind.command ? (
    <S.layout background={ Colors.black900 }>
      <S.contents color={ Colors.black100 }>
        {remind.command}
      </S.contents>
      <S.footer>
        <S.date color={ Colors.black300 }>
          {dayjs(remind.startDate).format('MM.DD')}
          -
          {dayjs(remind.endDate).format('MM.DD')}
        </S.date>
        <S.dot background={ Colors.angro } />
      </S.footer>
    </S.layout>
  ) : (
    <S.emptyLayout>
      <S.contents color={ Colors.black100 }>
        리마인드를 해주세요 :)
      </S.contents>
      <S.footer>
        <S.date color={ Colors.black300 }>
          {dayjs(remind.startDate).format('MM.DD')}
          -
          {dayjs(remind.endDate).format('MM.DD')}
        </S.date>
      </S.footer>
    </S.emptyLayout>
  )
);

export default RemindItem;
