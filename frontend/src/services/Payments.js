import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetPayments = () => {
    return axios.get(config.baseURL + `payments/getPayments/`,{ 
        headers: header})
}