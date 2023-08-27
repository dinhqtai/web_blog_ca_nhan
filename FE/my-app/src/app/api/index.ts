import axios from "axios";

const instant = axios.create({
    baseURL: "http://localhost:8088/",
})
export default instant