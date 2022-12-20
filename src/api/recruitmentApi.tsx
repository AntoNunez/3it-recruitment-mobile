import axios from "axios";

const baseURL= 'http://localhost:8090/api'

const recruitmentApi = axios.create({baseURL});



export default recruitmentApi;