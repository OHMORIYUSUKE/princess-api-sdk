import axiosBase from 'axios';

const version = 'v2';
export const axios = axiosBase.create({
  baseURL: `https://api.matsurihi.me/api/mltd/${version}`,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
});
