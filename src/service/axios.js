import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
//   baseURL: process.env.REACT_APP_API,
  baseURL:'http://54.179.253.243:8000/api',
});

export default API;