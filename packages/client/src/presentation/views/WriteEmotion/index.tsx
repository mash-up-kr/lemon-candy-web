import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import WriteEmotionScene from '@/presentation/containers/writeEmotion';
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Header from "@/presentation/components/header";
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';

const WriteEmotion = () => {
  const [article, setArticle] = useState('');
  const [date, setDate] = useState(dayjs());
  const [emotion, setEmotion] = useState(0);
  const dispatch = useDispatch();

  const submitHandler = () => {
    const payload = { article, date, emotion };
    dispatch({ type: DailyArticleActionTypes.REQUEST_SAVE_DAILY_ARTICLE, payload });
  }

  return (
    <div>
      <Header
        title={ `${dayjs().format('MM')}월` }
        leftSide={ <Link to="/setting">뒤로가기</Link> }
        rightSide={ <div onClick={ submitHandler }>완료</div> }
      />
      <WriteEmotionScene 
        article={ article }
        setArticle={ setArticle } 
        date={ date }
        setDate={ setDate }
        emotion={ emotion} 
        setEmotion={ setEmotion }/>
    </div>
  );
};

export default WriteEmotion;
