import axios from "axios";

export default axios.create({
  baseURL: "https://backend.notchswap.com",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"
  }
});