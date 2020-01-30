import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'spacedeploy123456',
  Provider: 'kakao',
  TimeZone: 'Asia/Seoul',
};

export const getDailyArticle = async () => {
  try {
    console.log('hellowrold');
  } catch (e) {
    console.error(e);
  }
};

export const saveDailyArticle = async (actions: any) => {
  const { date } = actions;
  try {
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/dailyArticle`, {  ...actions, time: date }, { headers });
    return res;
  } catch (e) {
    console.error(e);
  }
}
