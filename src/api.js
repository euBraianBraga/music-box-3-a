import axios from "axios";

const api = axios.create({
  baseURL: "https://64371cc93e4d2b4a12e3e6d5.mockapi.io/musicas"
});

export default api;