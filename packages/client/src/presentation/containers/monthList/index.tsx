import colors from '@lemon/colors';
import { BlueJelly } from '@lemon/icons';
import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

interface StyleProps {
  color?: string;
}

const S = {
  wrap: styled.div`
    padding: 23px 15px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 14px;
  `,
  mask: styled.div<StyleProps>`
    background-color: ${(props) => props.color};
    overflow: hidden;
    position: relative;

    &:before {
      content: "";
      padding-bottom: 100%;
      display: inline-block;
      vertical-align: top;
    }
  `,
  numberLabel: styled.div`
   width: 19px;
   height: 24px;
   font-size: 16px;
   font-weight: bold;
   letter-spacing: normal;
   text-align: center;
   color: #ffffff;
   position: absolute;
   top: 8px;
   left: 4px;
  `,
  monster: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${BlueJelly});
    background-size: 100% auto;
    top: 28px;
  `,
};

const MonthList = () => {
  console.log(dayjs().date(11));
  return (
    <S.wrap>
      <S.mask color={ colors.black700 }>
        <S.numberLabel>1</S.numberLabel>
        <S.monster />
      </S.mask>
      <S.mask color={ colors.black700 }>
        <S.numberLabel>1</S.numberLabel>
        <S.monster />
      </S.mask>
      <S.mask color={ colors.black700 }>
        <S.numberLabel>1</S.numberLabel>
        <S.monster />
      </S.mask>
      <S.mask color={ colors.black700 }>
        <S.numberLabel>1</S.numberLabel>
        <S.monster />
      </S.mask>
    </S.wrap>
  );
};

export default MonthList;
