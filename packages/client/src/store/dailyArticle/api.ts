import axios from 'axios';
import dayjs from 'dayjs';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege...'
}

export const getDailyArticle = async () => {
  try {
    console.log('hellowrold');
  } catch (e) {
    console.error(e);
  }
};

export const saveDailyArticle = async (data: any) => {
  const date = dayjs();
  try {
    axios.post(`${process.env.REACT_APP_DOMAIN}/dailyArticle`, {
      "userId": 14,
      "emotion": 28,
      "time": date,
      "article": data.payload,
    }, {
      headers
    }).then((result: any) => console.log(result));
  } catch (e) {
    console.error(e);
  }
}
