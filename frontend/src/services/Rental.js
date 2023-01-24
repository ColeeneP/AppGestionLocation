import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetAllRentals = () => {
    return axios.get(config.baseURL + `rental/getAllRentals/`,{ 
        headers: header})
}

export const GetOneRental = (id) => {
    return axios.get(config.baseURL + `rental/getOneRental/` + id,{ 
        headers: header})
}

export const CreateRental = (post) => {
    return axios.post(config.baseURL + `rental/createRental`, post, { 
        headers: header})
}

export const ModifyRental = (id, post) => {
    return axios.put(config.baseURL + `rental/modifyRental/`+ id, post, { 
        headers: header})
}

export const DeleteRental = (id) => {
    return axios.delete(config.baseURL + `rental/deleteRental/` + id,{ 
        headers: header})
}