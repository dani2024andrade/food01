import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-gjc1.onrender.com',
})