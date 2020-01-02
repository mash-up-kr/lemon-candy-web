import axios from 'axios';
import dayjs from 'dayjs';

export const getDailyArticle = async () => {
  try {
    console.log('hellowrold');
  } catch (e) {
    console.error(e);
  }
};

export const saveDailyArticle = async (data: any) => {
  try {
    /**
     * test dummy api call
     */
    axios.post(`${process.env.REACT_APP_DOMAIN}/dailyArticle`, {
      "userId": 29,
      "emotion": 0,
      "time": dayjs().format(),
      "article": data.payload
    }).then(result => console.log(result));
  } catch (e) {
    console.error(e);
  }
}
