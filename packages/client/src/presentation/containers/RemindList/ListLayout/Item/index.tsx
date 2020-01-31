import Colors from '@lemon/colors';
import React from 'react';

import S from './styles';
// @ts-ignore
import { REMIND } from '@/presentation/containers/RemindList/ListLayout';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

interface Props {
  remind: REMIND;
}

const COLOR_SET = [
  Colors.angro,
  Colors.happiness,
  Colors.sadness,
]

const RemindItem: React.FC<Props> = ({
  remind
}) => (
  <Link to={ `/reminds/${remind.remindId}` }>
    {
      remind.command ? (
        <S.layout background={ Colors.black900 }>
          <S.contents color={ Colors.black100 }>
            {remind.command}
          </S.contents>
          <S.footer>
            <S.date color={Colors.black300}>
              {dayjs(remind.startDate).format('MM.DD')}
              -
              {dayjs(remind.endDate).format('MM.DD')}
            </S.date>
            <S.dot background={COLOR_SET[remind.bestEmotion]}/>
          </S.footer>
        </S.layout>
      ) : (
        <S.emptyLayout>
          <S.contents color={Colors.black100}>
            리마인드를 해주세요 :)
          </S.contents>
          <S.footer>
            <S.date color={Colors.black300}>
              {dayjs(remind.startDate).format('MM.DD')}
              -
              {dayjs(remind.endDate).format('MM.DD')}
            </S.date>
          </S.footer>
        </S.emptyLayout>
      )
    }
  </Link>
);

export default RemindItem;
