import axios from 'axios';
import { Md5 } from 'ts-md5';

const ts = new Date().toISOString();
const hash = Md5.hashStr(
  ts
  + import.meta.env.VITE_PRIVATE_KEY
  + import.meta.env.VITE_PUBLIC_KEY,
);

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    apikey: import.meta.env.VITE_PUBLIC_KEY,
    ts,
    hash,
  },
});

export const DEZ = 10;
