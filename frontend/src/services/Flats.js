import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetFlats = () => {
    return axios.get(config.baseURL + `flat/getFlats/`,{ 
        headers: header})
}

export const GetFlat = (id) => {
    return axios.get(config.baseURL + `flat/getFlat/` + id,{ 
        headers: header})
}

export const CreateFlat = (post) => {
    return axios.post(config.baseURL + `flat/createFlat`, post, { 
        headers: header})
}

export const UpdateFlat = (id, post) => {
    return axios.put(config.baseURL + `flat/updateFlat/`+ id, post, { 
        headers: header})
}

export const DeleteFlat = (id) => {
    return axios.delete(config.baseURL + `flat/deleteFlat/` + id,{ 
        headers: header})
}