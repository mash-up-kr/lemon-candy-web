import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';

const WriteEmotion = () => {
  const [feeling, setFeeling] = useState('');
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch({ type: DailyArticleActionTypes.REQUEST_SAVE_DAILY_ARTICLE, payload: feeling });
  }

  return (
    <div>
      <textarea value={feeling} onChange={(e) => setFeeling(e.target.value)}></textarea>
      <button onClick={submitHandler}>submit</button>
    </div>
  );
}

export default WriteEmotion;