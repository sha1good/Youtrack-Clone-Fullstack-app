import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";

 

const api =  axios.create({baseURL: API_BASE_URL});

const token = localStorage.getItem("token");
console.log(token);

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

api.defaults.headers.post["Content-Type"] = "application/json";

 export default api;
