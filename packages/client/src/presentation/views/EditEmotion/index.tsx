import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import WriteEmotionScene from '@/presentation/containers/writeEmotion';
import dayjs from "dayjs";
import moment from 'moment';
import { Link, useParams } from "react-router-dom";
import Header from "@/presentation/components/header";
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';

function useLocaleInit() {
  useEffect(() => {
    moment.locale('ko');
  }, [])
}

const EditEmotion = () => {
  useLocaleInit();
  const { year, month, day } = useParams();
  const data = useSelector((state:any) => state.dailyArticle.currentArticle);
  const [article, setArticle] = useState(data.article);
  const [date, setDate] = useState(moment(`${year}-${month}-${day}`, 'YYYY-MM-DD'));
  const [emotion, setEmotion] = useState(0);

  const dispatch = useDispatch();
  const submitHandler = () => {
    const payload = { article, time: moment(date).format('YYYY-MM-DDT00:00:00'), emotion };
    dispatch({ type: DailyArticleActionTypes.REQUEST_EDIT_DAILY_ARTICLE, payload });
  }

  return (
    <div>
      <Header
        title={ `${dayjs(month, 'MM').format('MM')}월` }
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

export default EditEmotion;
