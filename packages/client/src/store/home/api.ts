import axios from 'axios';
import qs from 'querystring';

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'spacedeploy123456',
  Provider: 'kakao',
  TimeZone: 'Asia/Seoul',
};

export const getHome = async () => {
  try {
    const data = qs.stringify({ year: 2020 });
    const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/home?${data}`, { headers });
    console.log(res); 
  } catch (e) {

  }
}