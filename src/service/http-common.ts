import axios from "axios";

export default axios.create({
  baseURL: "https://backend.notchswap.com",
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    // "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"
  }
});