import { Test } from './Test';
import axios from 'axios';

export const myPackage = async (taco = ''): Promise<string> => {
  const res = await axios.get(
    'https://api.matsurihi.me/api/mltd/v2/version/latest'
  );
  console.log(res.data);

  const test = new Test().test();
  return `${taco} from my package`;
};
