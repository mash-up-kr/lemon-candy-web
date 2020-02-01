import React, { useState, useCallback, useEffect } from 'react';
import moment from 'moment';
import { StyledSwipeWrapper, Scenewrapper, StyledContentWrapper, StyledTextAreaWrapper, StyledDatePickerWrapper } from './styled';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import 'react-dates/initialize';
import 'moment/locale/ko'
import 'react-dates/lib/css/_datepicker.css';
import LottieComp, { LottieWrapper, LottieTitle } from '@/presentation/components/LottieComp';
import { _MONSTERS } from '@/presentation/resources/monster';
import { useHistory } from 'react-router-dom';

function useLocaleInit() {
  useEffect(() => {
    moment.locale('ko');
  }, [])
}

interface IDatePickerSection {
  date: any;
  setDate: (date: any) => any;
}

const DatePickerSection = (props: IDatePickerSection) => {
  const { date, setDate } = props;
  return (
    <StyledDatePickerWrapper>
      <div className="content">
        <div className="date_picker">
            <label className="date">{moment(date).format('MM월 DD일 ddd요일')}</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
      </div>
    </StyledDatePickerWrapper>
  )
}

const SwiperSection = (props: any) => {
  const { emotion, setEmotion } = props;

  const [swiper, updateSwiper] = useState(null as any);
  const updateIndex = useCallback(() => {
    setEmotion(swiper.realIndex)
  }, [swiper])

  useEffect(() => {
    if (swiper !== null) {
      swiper.on("slideChange", updateIndex);
    }

    return () => {
      if (swiper !== null) {
        swiper.off("slideChange", updateIndex);
      }
    };
  }, [swiper, updateIndex]);
  const params = {
    effect: 'coverflow',
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: -60,
      depth: 300,
      modifier: 1,
      slideShadows: false
    },
    getSwiper: updateSwiper,
  }
  return (
    <Swiper {...params}>
      {
        _MONSTERS.map((v, key) => {
          return (
            <div key={key}>
              <LottieWrapper>
                <LottieComp animationData={v.img} isActive={key === emotion}/>
                <LottieTitle>{v.title}</LottieTitle>
              </LottieWrapper>
            </div>
          )
        })
      }
    </Swiper>
  )
}

interface IWriteEmotion {
  date: any,
  setDate: (date: any) => any;
  article: string,
  setArticle: (feeling: string) => any;
  emotion: number,
  setEmotion: (emotion: number) => any;
}

const WriteEmotion = (props: IWriteEmotion) => {
  const { date, setDate, article, setArticle, emotion, setEmotion } = props;
  useLocaleInit();
  const history = useHistory();
  if (!article) history.goBack();
  return (
    <Scenewrapper>
      <StyledSwipeWrapper>
        <SwiperSection 
          emotion={ emotion } 
          setEmotion={ setEmotion } 
          />
      </StyledSwipeWrapper>
      <StyledContentWrapper>
        <DatePickerSection 
          date={ date } 
          setDate={ setDate }
          />
        <StyledTextAreaWrapper>
          <textarea
            placeholder="오늘 하루 어떠셨나요?"
            value={ article }
            onChange={ (e) => { setArticle(e.target.value)} } />
        </StyledTextAreaWrapper>
      </StyledContentWrapper>
    </Scenewrapper>
  );
}

export default WriteEmotion;
