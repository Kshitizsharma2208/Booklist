import Axios from "axios";

const API = Axios.create({
    baseURL: 'http://assignment.cyberboxer.com/',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
});
export default API;