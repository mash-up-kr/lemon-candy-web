import colors from '@lemon/colors';
import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

import { getCurrentMonth } from '@/utils/dayjs';

interface Props {
  title?: string;
}

interface StyleProps {
  color?: string;
}

const S = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px;
  `,
  title: styled.h1<StyleProps>`
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    color: ${(props) => props.color};
  `,
  calendarWrap: styled.table`
    margin-top: 10px;
  `,
  tableTitle: styled.td`
    width: 20px;
    font-size: 0.5rem;
    padding: 6px;
    font-weight: bold;
    color: ${(props) => props.color};
  `,
  dotWrap: styled.td`
    width: 20px;
    height: 9px;
    padding: 0 4px;
  `,
  dot: styled.div<StyleProps>`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${(props) => (props.color ? props.color : 'none')};
  `,
};

const renderCalendar = () => {
  console.log('t', dayjs().toString());
};

const EmotionCalendar: React.FC<Props> = ({
  title = `${getCurrentMonth()}월`,
}: Props) => (
  <S.wrap>
    <S.title color={ colors.black0 }>
      {title}
    </S.title>
    <S.calendarWrap>
      <tr>
        {renderCalendar()}
        <S.tableTitle color={ colors.black0 }>S</S.tableTitle>
        <S.tableTitle color={ colors.black0 }>M</S.tableTitle>
        <S.tableTitle color={ colors.black0 }>T</S.tableTitle>
        <S.tableTitle color={ colors.black0 }>W</S.tableTitle>
        <S.tableTitle color={ colors.black0 }>T</S.tableTitle>
        <S.tableTitle color={ colors.black0 }>F</S.tableTitle>
        <S.tableTitle color={ colors.black0 }>S</S.tableTitle>
      </tr>
      <tr>
        <S.dotWrap><S.dot /></S.dotWrap>
        <S.dotWrap><S.dot /></S.dotWrap>
        <S.dotWrap><S.dot color={ colors.black100 } /></S.dotWrap>
        <S.dotWrap><S.dot color={ colors.black100 } /></S.dotWrap>
        <S.dotWrap><S.dot color={ colors.black100 } /></S.dotWrap>
        <S.dotWrap><S.dot color={ colors.black100 } /></S.dotWrap>
        <S.dotWrap><S.dot color={ colors.black100 } /></S.dotWrap>
      </tr>
    </S.calendarWrap>
  </S.wrap>
);

export default EmotionCalendar;
