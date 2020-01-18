import React, { useState, useCallback, useEffect, useRef } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';
import { SingleDatePicker } from 'react-dates';
import { StyledSwipeWrapper, Scenewrapper, StyledContentWrapper, StyledTextAreaWrapper, StyledDatePickerWrapper } from './styled';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import 'react-dates/initialize';
import 'moment/locale/ko'
import 'react-dates/lib/css/_datepicker.css';
import LottieComp, { LottieWrapper, LottieTitle } from '@/presentation/components/LottieComp';
import happiness from '@lemon/icons/lottie/happiness.json';
import { _MONSTERS } from '@/presentation/resources/monster';

function useLocaleInit() {
  useEffect(() => {
    moment.locale('ko');
  }, [])
}

const DatePickerSection = () => {
  const [date, setDate] = useState(moment);
  const [isFocus, setFocus] = useState(false);
  const onDateChangeHandler = useCallback((_date: any) => setDate(_date), []);
  const onFocusChangeHandler = useCallback(({ focused }) => setFocus(focused), []);
  return (
    <StyledDatePickerWrapper>
      <div className="content">
        <div className="date_picker">
          <SingleDatePicker
            date={date}
            onDateChange={onDateChangeHandler}
            displayFormat="MM.DD dddd"
            focused={isFocus}
            onFocusChange={onFocusChangeHandler}
            numberOfMonths={1}
            id={'date_picker'} />
        </div>
      </div>
    </StyledDatePickerWrapper>
  )
}

const SwiperSection = () => {
  const params = {
    effect: 'coverflow',
    slidesPerView: 3,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: -60,
      depth: 300,
      modifier: 1,
      slideShadows: false
    },
  }
  return (
    <Swiper {...params}>
      {
        _MONSTERS.map((v, key) => {
          return (
            <div key={key}>
              <LottieWrapper>
                <LottieComp animationData={v.img} />
                <LottieTitle>{v.title}</LottieTitle>
              </LottieWrapper>
            </div>
          )
        })
      }
    </Swiper>
  )
}

const WriteEmotion = () => {
  useLocaleInit();

  const [feeling, setFeeling] = useState('');
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch({ type: DailyArticleActionTypes.REQUEST_SAVE_DAILY_ARTICLE, payload: feeling });
  }

  return (
    <Scenewrapper>
      <StyledSwipeWrapper>
        <SwiperSection />
      </StyledSwipeWrapper>
      <StyledContentWrapper>
        <DatePickerSection />
        <StyledTextAreaWrapper>
          <textarea placeholder="오늘 하루 어떠셨나요?" value={feeling} onChange={(e) => setFeeling(e.target.value)}></textarea>
        </StyledTextAreaWrapper>
        {/* <button onClick={submitHandler}>
          submit
        </button> */}
      </StyledContentWrapper>
    </Scenewrapper>
  );
}

export default WriteEmotion;