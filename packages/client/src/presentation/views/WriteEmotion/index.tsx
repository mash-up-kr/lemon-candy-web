import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import WriteEmotionScene from '@/presentation/containers/writeEmotion';
import { useHistory } from "react-router-dom";
import Header from "@/presentation/components/header";
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';
import moment from 'moment';
import 'moment/locale/ko';

function useLocaleInit() {
  useEffect(() => {
    moment.locale('ko');
  }, [])
}

const WriteEmotion = () => {
  const history = useHistory();
  useLocaleInit();
  const [article, setArticle] = useState('');
  const [date, setDate] = useState(moment().format());
  const [emotion, setEmotion] = useState(0);
  const dispatch = useDispatch();

  const submitHandler = () => {
    const payload = { article, time: moment(date).format('YYYY-MM-DDT00:00:00'), emotion };
    dispatch({ type: DailyArticleActionTypes.REQUEST_SAVE_DAILY_ARTICLE, payload });
  };

  return (
    <div>
      <Header
        title={ `${moment().format('MM')}월` }
        leftSide="<"
        leftSideOnClick={ () => { history.goBack(); } }
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
