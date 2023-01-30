import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetPayments = () => {
    return axios.get(config.baseURL + `payment/getPayments/`,{ 
        headers: header})
}

export const GetPayment = (id) => {
    return axios.get(config.baseURL + `payment/getPayment/` + id,{ 
        headers: header})
}

export const CreatePayment = (post) => {
    return axios.post(config.baseURL + `payment/createPayment`, post, { 
        headers: header})
}

export const UpdatePayment = (id, post) => {
    return axios.put(config.baseURL + `payment/updatePayment/`+ id, post, { 
        headers: header})
}

export const DeletePayment = (id) => {
    return axios.delete(config.baseURL + `payment/deletePayment/` + id,{ 
        headers: header})
}