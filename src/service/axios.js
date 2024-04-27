import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
  //   baseURL: process.env.REACT_APP_API,
  // baseURL:'http://18.141.200.39:8000/api',
  baseURL: 'http://18.140.56.180:8000/api'
});

export default API;