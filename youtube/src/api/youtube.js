import axios from "axios";
import { MY_KEY } from '../myKey';
export const URL = `https://youtube.googleapis.com/youtube/v3/`;

export const youtube = axios.create({
    baseURL: URL,
      params: {
        part: 'snippet',
        maxResults: 10,
        key: MY_KEY,
      }
    });
