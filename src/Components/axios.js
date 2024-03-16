import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001" // or whichever port your server is running on
})

export default instance;