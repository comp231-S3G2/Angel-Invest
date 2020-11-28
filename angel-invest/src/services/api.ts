import axios from "axios";
import { BASE_API_URL } from "../config/AppConstants";

const API = axios.create({
    baseURL: BASE_API_URL,
    timeout: 6000,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

const setToken = (token: string) => {
    console.log(token);
    if (token)
        API.defaults.headers.common.Authorization = `Bearer ${token}`;
    else console.log("No token provided")
}
export { API, setToken }