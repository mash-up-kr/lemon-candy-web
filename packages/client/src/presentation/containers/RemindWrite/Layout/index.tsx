import Colors from '@lemon/colors';
import LOTTIE_0 from '@lemon/icons/lottie/angro.json';
import LOTTIE_2 from '@lemon/icons/lottie/happiness.json';
import LOTTIE_1 from '@lemon/icons/lottie/sadness.json';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import Swiper from 'react-id-swiper';

import LottieComp from '@/presentation/components/LottieComp';

import { REMIND_DETAIL } from '../index';
import S from './styles';

interface Props {
  detail: REMIND_DETAIL;
}

const LOTTIES = [
  LOTTIE_0,
  LOTTIE_1,
  LOTTIE_2,
];

const RemindWriteLayout = ({
  detail,
}: Props) => {
  const [contents, setContents] = useState(detail.command);
  const date = `${dayjs(detail.startDate).format('MM월 DD일')} - ${dayjs(detail.endDate).format('MM월 DD일')}`;
  const params = {
    slidesPerView: 'auto',
    freeMode: true,
  };

  // @ts-ignore
  const handleChange = (event) => setContents(event.target.value);

  return (
    <S.layout>
      <S.date color={ Colors.black0 }>{date}</S.date>
      <S.lottieWrap>
        <Swiper { ...params }>
          {
            detail.emotionRank.map((item, index) => (
              <S.lottieLayout
                width={ `${200 - (index * 40)}` }
              >
                <LottieComp
                  animationData={ LOTTIES[item.emotion] }
                  width="100%"
                  height="100%"
                />
                <S.lottieTitle color={ Colors.black100 }>
                  {item.count}
                  개
                </S.lottieTitle>
              </S.lottieLayout>
            ))
          }
        </Swiper>
      </S.lottieWrap>
      <S.contentsLayout
        color={ Colors.black0 }
        background={ Colors.black900 }
      >
        <textarea
          placeholder="리마인드를 해주세요 :)"
          value={ contents }
          onChange={ handleChange }
        />
      </S.contentsLayout>
    </S.layout>
  );
};

export default RemindWriteLayout;
