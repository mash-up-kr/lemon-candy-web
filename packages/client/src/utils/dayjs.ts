import dayjs from 'dayjs';

const getDate = (format: string) => (date: Date) => dayjs(date).format(format);
const getMonth = (date: Date) => getDate('MM')(date);
const getCurrentMonth = () => getMonth(new Date());

export {
  getDate,
  getMonth,
  getCurrentMonth,
};
