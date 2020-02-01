import axios from 'axios';
import qs from 'querystring';
import dayjs from 'dayjs';

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'spacedeploy123456',
  Provider: 'kakao',
  TimeZone: 'Asia/Seoul',
};

export const editDailyArticle = async (actions: any) => {
  const { date } = actions;
  try {
    const res = await axios.put(`${process.env.REACT_APP_DOMAIN}/dailyArticle`, {  ...actions }, { headers });
    return res;
  } catch (e) {
    console.error(e);
  }
}

export const getDailyArticle = async (payload: any) => {
  try {
    const data = qs.stringify(payload);
    const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/dailyArticle?${data}`, { headers })
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const saveDailyArticle = async (actions: any) => {
  const { emotion, time, article } = actions;
  try {
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/dailyArticle`, {  emotion, article, time }, { headers });
    return res;
  } catch (e) {
    console.error(e);
  }
}
