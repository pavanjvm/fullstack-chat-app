import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://54.80.46.133:5001/api" : "/api",
  withCredentials: true,
});
