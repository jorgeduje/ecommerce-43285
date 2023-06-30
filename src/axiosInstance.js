import axios from "axios";

export const axiosCustom = axios.create({
    baseURL: 'http://localhost:5000/products',
    // headers: {'Content-Type': 'Aplication/jon'}
  });