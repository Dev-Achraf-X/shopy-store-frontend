import axios from "axios";

export const makeRequiest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
