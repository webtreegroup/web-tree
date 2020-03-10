import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://web-tree.ru/wp-json/wp/v2/',
  headers: {'Content-Type': 'application/json'}
});
