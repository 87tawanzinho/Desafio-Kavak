import axios from "axios";

export const instance = axios.create({
  baseURL: "https://backend-desafio-havek.vercel.app",
});
