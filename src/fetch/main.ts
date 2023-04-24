import axiosBase from 'axios';

export const axios = axiosBase.create({
  baseURL: 'https://api.matsurihi.me/api/mltd/v2',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
});
