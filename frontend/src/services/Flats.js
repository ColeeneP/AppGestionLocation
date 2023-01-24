import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetAllFlats = () => {
    return axios.get(config.baseURL + `flats/getAllFlats/`,{ 
        headers: header})
}

export const GetOneFlat = (id) => {
    return axios.get(config.baseURL + `flats/getOneFlat/` + id,{ 
        headers: header})
}

export const CreateFlat = (post) => {
    return axios.post(config.baseURL + `flats/createFlat`, post, { 
        headers: header})
}

export const ModifyFlat = (id, post) => {
    return axios.put(config.baseURL + `flats/modifyFlat/`+ id, post, { 
        headers: header})
}

export const DeleteFlat = (id) => {
    return axios.delete(config.baseURL + `flats/deleteFlat/` + id,{ 
        headers: header})
}