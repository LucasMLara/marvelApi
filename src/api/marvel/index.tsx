import axios from 'axios';

import { Md5 } from 'ts-md5';

const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
console.log('📓 ~ file: index.tsx ~ line 6 ~ PUBLIC_KEY', PUBLIC_KEY);

const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
console.log('📓 ~ file: index.tsx ~ line 9 ~ PRIVATE_KEY', PRIVATE_KEY);
const TIME = new Date().toISOString();
console.log('📓 ~ file: index.tsx ~ line 11 ~ TIME', TIME);
const HASH = Md5.hashStr(TIME + PRIVATE_KEY + PUBLIC_KEY);
console.log('📓 ~ file: index.tsx ~ line 13 ~ HASH', HASH);
const URL = import.meta.env.VITE_API_BASE_URL;
console.log('📓 ~ file: index.tsx ~ line 16 ~ URL', URL);

export const characterRequest = async () => {
  try {
    const res = await axios.get(`${URL}characters?ts=${TIME}&apikey=${PUBLIC_KEY}&hash=${HASH}`);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const DEZ = 10;
