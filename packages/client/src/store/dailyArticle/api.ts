import axios from 'axios';
import dayjs from 'dayjs';

export const getDailyArticle = async () => {
  try {
    console.log('hellowrold');
  } catch (e) {
    console.error(e);
  }
};
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege...'
}


export const saveDailyArticle = async (data: any) => {
  try {
    axios.post(`${process.env.REACT_APP_DOMAIN}/dailyArticle`, {
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json",
      },
      data: {
        "userId": 0,
        "emotion": 0,
        "time": "2020-01-09T13:38:00.104Z",
        "article": "helloworld",
      }
    }).then((result: any) => console.log(result));
  } catch (e) {
    console.error(e);
  }
}
