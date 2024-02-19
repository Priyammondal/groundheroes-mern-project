import axios from "axios";

const groundHeroes = axios.create({
  baseURL: "http://localhost:8080",
});

const tokenType = localStorage.getItem("tokenType");
const token = localStorage.getItem("token");
if (token && tokenType) {
  groundHeroes.defaults.headers.common[
    "Authorization"
  ] = `${tokenType} ${token}`;
} else {
  delete groundHeroes.defaults.headers.common["Authorization"];
}

export default groundHeroes;
