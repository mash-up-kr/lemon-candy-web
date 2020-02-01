import colors from '@lemon/colors';
import { BlueJelly } from '@lemon/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import LottieComp from '@/presentation/components/LottieComp';
import { mockupData } from './mock';
import { _MONSTERS } from '@/presentation/resources/monster';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';

interface StyleProps {
  color?: string;
  today?: boolean;
  onClick?: any;
}

const S = {
  wrap: styled.div`
    padding: 70px 15px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 14px;
  `,
  mask: styled.div<StyleProps>`
    background-color: #131415;
    overflow: hidden;
    position: relative;

    &:before {
      content: "";
      padding-bottom: 100%;
      display: inline-block;
      vertical-align: top;
    }

    &.today {
      border-style: solid;
      border-width: 1px;
      border-image-source: linear-gradient(144deg, #ff0000, #ff5200 16%, #ffde00 32%, #00ff63 48%, #3000ff 64%, #7b00ff 80%, #ff008e 95%);
      border-image-slice: 1;
      background-color: #131415;
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
    background-size: 100% auto;
    top: 28px;
  `,
};

const LottieComp2 = (props: any) => {
  const { isActive } = props;

  const defaultOptions = {
    animationData: props.animationData,
    loop: false,
    autoplay: false,
    rendererSettings: {
      className: 'add-class', // svg에 적용
    }
  };
  return (
      <Lottie
        options={defaultOptions}
        isPaused={true}
        isStopped={true}
        />
    )
};


const MonthListComp = () => {
  const [active, setActive] = useState(false);
  const history = useHistory();
  const onClickHandler = (idx: any) => {
    if (idx === 13) {
      history.push('/write');  
      return;
    }
    history.push('/daily/2020/01/31')
  }
  return (
    <S.wrap>
      {
        mockupData.map((v: any, idx) => {
          return (
          <S.mask color={ colors.black700 } className={idx === 13 ? 'today' : ''} onClick={() => onClickHandler(idx)} key={idx}>
              <S.numberLabel>{idx + 1}</S.numberLabel>
              <S.monster>
                {v.id !== null && <LottieComp2 animationData={_MONSTERS[v.id].img} isActive={false} />}
              </S.monster>
          </S.mask>
          )
        })
      }
    </S.wrap>
  );
};

export default MonthListComp;
