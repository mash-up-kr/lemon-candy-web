import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';
import dayjs from 'dayjs';
import { SingleDatePicker } from 'react-dates';

const StyledSwipeWrapper = styled.div`
  height: 300px;
  border: 1px solid white;
`;

const StyledContentWrapper = styled.div`
  padding: 44px;

`;

/**
 * color theme 가지고 오기
 */
const StyledDatePickerWrapper = styled.div`
  .content {
    padding-bottom: 3px;
    border-bottom: 1px solid #fff;
    display: inline-block;

    .date {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      position: relative; 
    }
  }
`;

const StyledTextAreaWrapper = styled.div`
  padding-top: 20px;
  textarea {
    width: 100%;
    background: none;
    border: none;
    resize: none;
    color: #c7c7c7;
    outline: 0px;
    overflow-y: hidden;
  }
`;
const days = ['일', '월', '화', '수', '목', '금', '토']
const MMDD = 'MM.DD';
const getDay = () => dayjs().day();
const getToday = () => dayjs().format(MMDD);
 
const WriteEmotion = () => {
  const [feeling, setFeeling] = useState('');
  const dispatch = useDispatch();
  const day = days[getDay()]
  const [date, setDate] = useState(`${getToday()} ${day}요일`);

  const submitHandler = () => {
    dispatch({ type: DailyArticleActionTypes.REQUEST_SAVE_DAILY_ARTICLE, payload: feeling });
  }

  return (
    <div>
      <StyledSwipeWrapper />
      <StyledContentWrapper>
        <StyledDatePickerWrapper>
          <div className="content">
            <span className="date">{date}</span>

          </div>
        </StyledDatePickerWrapper>
        <StyledTextAreaWrapper>
          <textarea placeholder="오늘 하루 어떠셨나요?" value={feeling} onChange={(e) => setFeeling(e.target.value)}></textarea>
        </StyledTextAreaWrapper>
      </StyledContentWrapper>
    </div>
  );
}

export default WriteEmotion;