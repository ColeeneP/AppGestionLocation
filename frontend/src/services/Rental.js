import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetRentals = () => {
    return axios.get(config.baseURL + `rental/getRentals/`,{ 
        headers: header})
}

export const GetRental = (id) => {
    return axios.get(config.baseURL + `rental/getRental/` + id,{ 
        headers: header})
}

export const CreateRental = (post) => {
    return axios.post(config.baseURL + `rental/createRental`, post, { 
        headers: header})
}

export const UpdateRental = (id, post) => {
    return axios.put(config.baseURL + `rental/updateRental/`+ id, post, { 
        headers: header})
}

export const DeleteRental = (id) => {
    return axios.delete(config.baseURL + `rental/deleteRental/` + id,{ 
        headers: header})
}