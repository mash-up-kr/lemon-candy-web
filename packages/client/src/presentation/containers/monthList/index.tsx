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
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  `,
  mask: styled.div<StyleProps>`
    background-color: ${(props) => props.color};
    margin: 5.5px 3px;
    max-width: 108px;
    width: 108px;
    height: 108px;
    position: relative;

    &:before {
      position: absolute;
      bottom: 0;
      content: '';
      width: 100%;
      height: 99px;
      background-size: 100%; 
      background-image: url(${BlueJelly});
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
   margin: 9px 6px;
  `,

};

const MonthList = () => {
  console.log(dayjs().date(11));
  return (
    <S.wrap>
      <S.mask color={ colors.black700 }>
        <S.numberLabel>1</S.numberLabel>
      </S.mask>
    </S.wrap>
  );
};

export default MonthList;
