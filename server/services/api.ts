import axios from "axios";

const api = axios.create({
  baseURL: "https://typer-dev.herokuapp.com/",
});

export default api;
