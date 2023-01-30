import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetAllInventories = () => {
    return axios.get(config.baseURL + `inventory/getAllInventories/`,{ 
        headers: header})
}

export const GetOneInventory = (id) => {
    return axios.get(config.baseURL + `inventory/getOneInventory/` + id,{ 
        headers: header})
}

export const CreateInventory = (post) => {
    return axios.post(config.baseURL + `inventory/createInventory`, post, { 
        headers: header})
}

export const UpdateInventory = (id, post) => {
    return axios.put(config.baseURL + `inventory/updateInventory/`+ id, post, { 
        headers: header})
}

export const DeleteInventory = (id) => {
    return axios.delete(config.baseURL + `inventory/deleteInventory/` + id,{ 
        headers: header})
}